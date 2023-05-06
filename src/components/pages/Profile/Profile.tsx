
import {Link, useParams} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {EventProfile, Festival, Photo, Ride, RideUser, UserProfile} from "../../../models";
import {DataStore, Storage} from "aws-amplify";
import AccountButton from "../../ui/AccountButton";
import PhotoImage from "../../ui/PhotoImage";
import Header from "../../layout/Header";
import PhotoModal from "./Modals/PhotoModal";
import {useNavigate} from 'react-router-dom'
import {IoArrowBack} from "react-icons/all";
import EventCard from "../../ui/EventCard";

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile>();
  const [profileImage, setProfileImage] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [eventsAttending, setEventsAttending] = useState<Festival[]>([])
  const [rides, setRides] = useState<Ride[]>([])

  const { profileId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await DataStore.query(UserProfile, c => c.id.eq(profileId as string))
      const profile = profileData[0];
      setProfile(profile);

      const imageData = await Storage.get(profile.profileImage as string);
      setProfileImage(imageData)

      const photoData = await DataStore.query(Photo, c => c.userProfileID.eq(profile.id))
      setPhotos(photoData)

      const eventProfiles = await profile.attendingEvents.toArray()
      const events = await Promise.all(eventProfiles.map(async eventProfile => await eventProfile.event))
      setEventsAttending(events)

      const rideUsers = await profile.rides.toArray();
      const rides = await Promise.all(rideUsers.map(async rideUser => await rideUser.ride))
      setRides(rides)
    }
    fetchProfile();
  }, [])

  return (
    <>
      <Header>
        <button className='mx-4 text-xl' onClick={() => navigate(-1)}><IoArrowBack /></button>
      </Header>
      <div className='p-4'>
      <div className={'flex flex-col items-center justify-center mt-header'}>
        <img width={350} height={350} src={profileImage} alt={profile?.id} className='rounded-full'/>
        <div className={'p-4 w-full max-w-lg'}>
          <h1 className={'text-xl my-4'}>{profile?.firstName} {profile?.lastName}</h1>
          <div className={'text-lg my-2 flex flex-wrap'}>
            <span className='basis-[120px]'>City:</span>
            <span>{profile?.city}</span>
          </div>
          <div className={'text-lg my-2 flex flex-wrap'}>
            <span className='basis-[120px]'>School:</span>
            <span>{profile?.school}</span>
          </div>
          <div className={'text-lg my-2 flex flex-wrap'}>
            <span className='basis-[120px]'>State:</span><span>{profile?.state}</span></div>
        </div>
      </div>
        <section>
          <h1 className='text-2xl my-4'>Events Attending</h1>
          {
            eventsAttending.map((event, index) =>
              <span key={event.id}><Link className='hover:underline text-green-950' to={`/events/${event.id}`}>{event.name}</Link>{index < eventsAttending.length - 1 ? ", " : ""}</span>
          )}
        </section>
        <section>
          <h1 className='text-2xl my-4'>Rides</h1>
          {
            rides.map(ride =>
              <div key={ride.id}>Ride to {ride.endPoint} from {ride.startPoint} on {ride.departureTime}</div>
            )}
        </section>
        <section className='flex flex-wrap  gap-4' >
          <h1 className='text-2xl my-4'>Photos</h1>
          <div className='flex flex-wrap gap-4'>
          {
            photos?.map(photo =>
              <div className='max-w-[200px] max-h-[200px] cursor-pointer aspect-square w-full h-full' key={photo.id} onClick={() => {setIsPhotoModalOpen(true);  setSelectedPhoto(photo)}}>
                <PhotoImage photo={photo} key={photo.id}/>
              </div>
            )
          }
          </div>
        </section>
        <PhotoModal photo={selectedPhoto} isOpen={isPhotoModalOpen} setIsOpen={setIsPhotoModalOpen} deletePhoto={false}/>
      </div>
    </>
  )
}

export default ProfilePage