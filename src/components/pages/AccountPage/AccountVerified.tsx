import {EventProfile, Festival, Photo, Ride} from "../../../models";
import React, {useContext, useEffect, useState} from "react";
import { DataStore } from "@aws-amplify/datastore";
import ProfileEditModal from "./Modals/ProfileEditModal";
import ProfileImageModal from "./Modals/ProfileImageModal";
import PhotoUploadModal from "./Modals/PhotoUploadModal";
import PhotoImage from "../../ui/PhotoImage";
import { BsPerson } from "react-icons/all";
import BannerPhotoModal from "./Modals/BannerPhotoModal";
import Button from "../../common/Button/Button";
import PhotoModal from "./Modals/PhotoModal";
import { Link } from "react-router-dom";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
import {getBannerPhoto, getEventsAttending, getProfilePhoto} from "../../../services/profileServices";
import ImageContext from "../../../context/ImageContext";
import {getRidesByProfile} from "../../../services/rideServices";
import EventCard from "../../ui/EventCard";
import RideCard from "../../ui/RideCard";

const AccountVerified = ({ user }: { user: any }) => {
  const [profileImage, setProfileImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isPhotoUploadModalOpen, setPhotoUploadModalOpen] = useState(false);
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false);
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false);
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [eventsAttending, setEventsAttending] = useState<Festival[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const username = user.username as string;
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const { getSignedURL } = useContext(ImageContext)

  useEffect(() => {
    if (!dataCleared || !userProfile) return;
    const fetchProfilePhoto = async () => {
      return await getProfilePhoto(userProfile, getSignedURL)
    }
    const fetchProfileBanner = async () => {
      return await getBannerPhoto(userProfile, getSignedURL)
    }

    const fetchRides = async () => {
      return await getRidesByProfile(userProfile);
    };

    try {
      fetchProfilePhoto()
        .then(image => setProfileImage(image));
      fetchProfileBanner()
        .then(image => setBannerImage(image));
      fetchRides()
        .then(rides => setRides(rides));
    } catch (e) {
      console.log(e);
    }

    // Use DataStore subs to get immediate updates

    try {
      const photoSub = DataStore.observeQuery(Photo, (photo) =>
        photo.userProfileID.eq(userProfile.id)
      ).subscribe(({ items }) => {
        setPhotos(items);
      });

      const eventSub = DataStore.observeQuery(EventProfile, (eventProfile) =>
        eventProfile.userProfileID.eq(userProfile.id)
      ).subscribe(async ({ items }) => {
        const events = []
        for await(const eventProfile of items) {
          const event = await eventProfile.event;
          events.push(event)
        }
        setEventsAttending(events);
      })

      return () => {
        photoSub.unsubscribe();
        eventSub.unsubscribe();
      };
    } catch (e) {
      console.log(e);
    }
  }, [userProfile, dataCleared]);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    setPhotoUploadModalOpen(true);
  }, [selectedFile]);

  return (
    <div className="w-full">
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
          <div className="bg-light-default rounded-2xl p-4 flex-1 max-h-[450px] ">
            {profileImage ? (
              <img
                onClick={() => setIsProfileImageModalOpen(true)}
                className="aspect-square max-w-[350px] w-full rounded-full cursor-pointer"
                src={profileImage}
                alt="Profile Image"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full max-w-[350px] max-h-[350px] border border-medium-default">
                <BsPerson className="w-3/4 h-3/4 text-medium-default text-center" />
              </div>
            )}
            <div className="flex justify-center my-2">
              <Button
                className="mx-2 flex-1"
                onClick={() => setProfileModalOpen(true)}
              >
                Edit Profile
              </Button>
              <Button
                className="flex-1"
                onClick={() => setIsBannerModalOpen(true)}
              >
                Change Banner
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h1 className="text-2xl my-4">Events Attending</h1>
        <div className='flex flex-wrap'>
        {eventsAttending.length > 0 ? eventsAttending?.map((event, index) => (
          <EventCard key={event.id} event={event} attendingFriends={[]}/>
        ))
          :
          <div>Not attending any events.</div>
        }</div>
      </section>
      <hr className="my-8 border border-primary-default w-full" />
      <section className="p-4">
        <h1 className="text-2xl my-4">Rides</h1>
        <div className='flex flex-wrap'>
        {rides.length > 0 ? rides?.map((ride, index) => (
          <RideCard ride={ride} key={ride.id} className='m-4'/>
        ))
          :
          <div>Not part of any rides.</div>
        }
        </div>
      </section>
      <hr className="my-8 border border-primary-default w-full" />
      <section className="p-4">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl">Photos</h2>
          <label
            htmlFor="upload-photo"
            className="block bg-green-950 text-white rounded-md uppercase py-2 px-4 cursor-pointer"
          >
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) =>
              e?.target?.files && setSelectedFile(e.target.files[0])
            }
            className="my-4 hidden"
            id="upload-photo"
          />
        </div>
        <div className="flex justify-center gap-4 flex-wrap w-full my-8">
          {photos?.map((photo) => (
            <div
              className="max-w-[200px] max-h-[200px]"
              onClick={() => {
                setPhotoModalOpen(true);
                setSelectedPhoto(photo);
              }}
              key={photo.id}
            >
              <PhotoImage
                className="object-cover cursor-pointer"
                photo={photo}
                level='protected'
              />
            </div>
          ))}
        </div>
      </section>
      {userProfile && (
        <>
          <BannerPhotoModal
            photos={photos}
            sub={username}
            isOpen={isBannerModalOpen}
            setIsOpen={setIsBannerModalOpen}
            profile={userProfile}
          />
          <PhotoUploadModal
            profile={userProfile}
            sub={username}
            isOpen={isPhotoUploadModalOpen}
            setIsOpen={setPhotoUploadModalOpen}
            photoFile={selectedFile}
            setPhotoFile={setSelectedFile}
          />
          <ProfileImageModal
            profile={userProfile}
            sub={username}
            isOpen={isProfileImageModalOpen}
            setIsOpen={setIsProfileImageModalOpen}
            photos={photos}
          />
          <ProfileEditModal
            profile={userProfile}
            profileImage={profileImage}
            isOpen={isProfileModalOpen}
            setIsOpen={setProfileModalOpen}
            sub={username}
            callback={() => {
              setProfileModalOpen(false);
              setIsProfileImageModalOpen(true);
            }}
          />
          <PhotoModal
            photo={selectedPhoto}
            isOpen={isPhotoModalOpen}
            setIsOpen={setPhotoModalOpen}
            deletePhoto={true}
          />
        </>
      )}
    </div>
  );
};

export default AccountVerified;
