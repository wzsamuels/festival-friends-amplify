import { Link, useParams } from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Festival, Photo, PrivacySetting, Ride, UserProfile} from "../../../models";
import PhotoImage from "../../ui/PhotoImage";
import Header from "../../layout/Header";
import PhotoModal from "../AccountPage/Modals/PhotoModal";
import { useNavigate } from "react-router-dom";
import { BsPerson, IoArrowBack } from "react-icons/all";
import getErrorMessage from "../../../lib/getErrorMessage";
import useDataClearedStore from "../../../stores/dataClearedStore";
import ImageContext from "../../../context/ImageContext";
import {getBannerPhoto, getEventsAttending, getProfile, getProfilePhoto} from "../../../services/profileServices";
import {getRidesByProfile} from "../../../services/rideServices";
import {getPhotosByProfile} from "../../../services/photoServices";
import RideCard from "../../ui/RideCard";

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null | undefined>();
  const [privacySetting, setPrivacySetting] = useState<PrivacySetting>();
  const [profileImage, setProfileImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [eventsAttending, setEventsAttending] = useState<Festival[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const dataCleared = useDataClearedStore(state => state.dataCleared);
  const { getSignedURL } = useContext(ImageContext)
  const { profileId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(!dataCleared) return;
    const fetchProfile = async () => {
      return await getProfile(profileId as string);
    };

    try {
      fetchProfile()
        .then(profile => setProfile(profile));
    } catch(error) {
      console.log("Error fetching profile in Profile.tsx: ", getErrorMessage(error));
    }
  }, [dataCleared, profileId]);

  useEffect(() => {
    if(!dataCleared || !profile) return;

    const fetchProfileImage = async () => {
      return await getProfilePhoto(profile, getSignedURL)
    }
    const fetchBannerImage = async () => {
      return await getBannerPhoto(profile, getSignedURL)
    }
    const fetchPhotos = async () => {
      return getPhotosByProfile(profile);
    }
    const fetchEventsAttending = async () => {
      return await getEventsAttending(profile)
    }

    const fetchRides = async () => {
      return await getRidesByProfile(profile);
    };
    const fetchPrivacySetting = async () => {
      return profile.privacySetting;
    }
    fetchProfileImage()
      .then(image => setProfileImage(image))
      .catch(error => console.log("Error fetching profile image: ", getErrorMessage(error)));
    fetchBannerImage()
      .then(bannerImage => setBannerImage(bannerImage));
    fetchPhotos()
      .then(photos => setPhotos(photos));
    fetchEventsAttending()
      .then(eventsAttending => setEventsAttending(eventsAttending));
    fetchRides()
      .then(rides => setRides(rides));
    fetchPrivacySetting()
      .then(privacySetting => setPrivacySetting(privacySetting));
  }, [dataCleared, profile]);

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
          {profileImage ? (
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
          {
            !privacySetting?.city &&
              <div className={"text-lg my-2 flex flex-wrap"}>
                <span className="basis-[120px]">City:</span>
                <span>{profile?.city}</span>
              </div>
          }
          {
            !privacySetting?.state &&
              <div className={"text-lg my-2 flex flex-wrap"}>
                <span className="basis-[120px]">State:</span>
                <span>{profile?.state}</span>
              </div>
          }
          {
            !privacySetting?.school &&
              <div className={"text-lg my-2 flex flex-wrap"}>
                <span className="basis-[120px]">School:</span>
                <span>{profile?.school}</span>
              </div>
          }
        </div>
        <section>
          <h1 className="text-2xl my-4">Events Attending</h1>
          {
            !privacySetting?.attendingEvents ?
              (eventsAttending.length > 0 ? eventsAttending.map((event, index) =>
                <span key={event.id}>
                  <Link
                    className="hover:underline text-green-950"
                    to={`/events/${event.id}`}
                  >
                    {event.name}
                  </Link>
                  {index < eventsAttending.length - 1 ? ", " : ""}
                </span>
              ) :
              <span>Not attending any events</span>
            ):
            <span>This user has set their privacy setting to hide events.</span>
          }
        </section>
        <section>
          <h1 className="text-2xl my-4">Rides</h1>
          <div className='flex flex-wrap'>
          {
            !privacySetting?.rides ?
              (rides.length > 0 ? rides.map(ride =>
                <RideCard ride={ride} key={ride.id} className="m-4"/>
              ) :
              <span>Not signed up for any rides</span>
            ) :
            <span>This user has set their privacy setting to hide rides.</span>
          }
          </div>
        </section>
        <section>
          <h1 className="text-2xl my-4">Photos</h1>
          <div className="flex flex-wrap gap-4">
            {
              !privacySetting?.photos ?
                (photos.length > 0 ? photos.map(photo =>
                  <div
                    className="max-w-[200px] max-h-[200px] cursor-pointer aspect-square w-full h-full"
                    key={photo.id}
                    onClick={() => {
                      setIsPhotoModalOpen(true);
                      setSelectedPhoto(photo);
                    }}
                  >
                    <PhotoImage level='protected' photo={photo} key={photo.id} />
                  </div>
                ) :
                <span>No photos</span>
              ) :
              <div>This user has set their privacy setting to hide photos.</div>
            }
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
