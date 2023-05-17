import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Festival, Photo, Ride, UserProfile } from "../../../models";
import { DataStore, Storage } from "aws-amplify";
import PhotoImage from "../../ui/PhotoImage";
import Header from "../../layout/Header";
import PhotoModal from "./Modals/PhotoModal";
import { useNavigate } from "react-router-dom";
import { BsPerson, IoArrowBack } from "react-icons/all";
import RideCardBase from "../../ui/RideCardBase";

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile>();
  const [profileImage, setProfileImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [eventsAttending, setEventsAttending] = useState<Festival[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);

  const { profileId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await DataStore.query(UserProfile, (c) =>
        c.id.eq(profileId as string)
      );
      const profile = profileData[0];
      setProfile(profile);

      const imageData = await Storage.get(profile.profileImage as string);
      setProfileImage(imageData);

      const banner = await profile.bannerPhoto;
      if (banner) {
        const bannerFile = await Storage.get(`${banner?.s3Key}`, {
          level: "public",
        });
        setBannerImage(bannerFile);
      }

      const photoData = await DataStore.query(Photo, (c) =>
        c.userProfileID.eq(profile.id)
      );
      setPhotos(photoData);

      const eventProfiles = await profile.attendingEvents.toArray();
      const events = await Promise.all(
        eventProfiles.map(async (eventProfile) => await eventProfile.event)
      );
      setEventsAttending(events);

      const rideUsers = await profile.rides.toArray();
      const rides = await Promise.all(
        rideUsers.map(async (rideUser) => await rideUser.ride)
      );
      setRides(rides);
    };
    fetchProfile();
  }, []);

  return (
    <>
      <Header>
        <button className="mx-4 text-xl" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </button>
      </Header>
      <section
        className={
          "flex justify-center flex-col relative w-full h-screen max-h-[500px]"
        }
      >
        {bannerImage ? (
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full  object-cover top-0 left-0"
          />
        ) : (
          <div className="w-full h-full  object-cover top-0 left-0 bg-light-default" />
        )}
        <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0">
          {profile?.profileImage ? (
            <img
              className="aspect-square max-w-[350px] w-full rounded-full cursor-pointer"
              src={profileImage}
              alt="Profile Image"
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full max-w-[350px] max-h-[350px] border border-medium-default">
              <BsPerson className="w-3/4 h-3/4 text-medium-default text-center" />
            </div>
          )}
        </div>
      </section>
      <div className="p-4">
        <div className={"w-full max-w-lg"}>
          <h1 className={"text-2xl my-4"}>
            {profile?.firstName} {profile?.lastName}
          </h1>
          <div className={"text-lg my-2 flex flex-wrap"}>
            <span className="basis-[120px]">City:</span>
            <span>{profile?.city}</span>
          </div>
          <div className={"text-lg my-2 flex flex-wrap"}>
            <span className="basis-[120px]">State:</span>
            <span>{profile?.state}</span>
          </div>
          <div className={"text-lg my-2 flex flex-wrap"}>
            <span className="basis-[120px]">School:</span>
            <span>{profile?.school}</span>
          </div>
        </div>
        <section>
          <h1 className="text-2xl my-4">Events Attending</h1>
          {eventsAttending.length > 0 ? (
            eventsAttending.map((event, index) => (
              <span key={event.id}>
                <Link
                  className="hover:underline text-green-950"
                  to={`/events/${event.id}`}
                >
                  {event.name}
                </Link>
                {index < eventsAttending.length - 1 ? ", " : ""}
              </span>
            ))
          ) : (
            <span>Not attending any events</span>
          )}
        </section>
        <section>
          <h1 className="text-2xl my-4">Rides</h1>
          {rides.length > 0 ? (
            rides.map((ride) => <RideCardBase ride={ride} key={ride.id} />)
          ) : (
            <span>Not signed up for any rides</span>
          )}
        </section>
        <section>
          <h1 className="text-2xl my-4">Photos</h1>
          <div className="flex flex-wrap gap-4">
            {photos?.map((photo) => (
              <div
                className="max-w-[200px] max-h-[200px] cursor-pointer aspect-square w-full h-full"
                key={photo.id}
                onClick={() => {
                  setIsPhotoModalOpen(true);
                  setSelectedPhoto(photo);
                }}
              >
                <PhotoImage photo={photo} key={photo.id} />
              </div>
            ))}
          </div>
        </section>
        <PhotoModal
          photo={selectedPhoto}
          isOpen={isPhotoModalOpen}
          setIsOpen={setIsPhotoModalOpen}
          deletePhoto={false}
        />
      </div>
    </>
  );
};

export default ProfilePage;
