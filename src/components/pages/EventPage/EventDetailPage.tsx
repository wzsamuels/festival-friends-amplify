import React, { useContext, useEffect, useState } from "react";
import {UserProfile} from "../../../models";
import { DataStore } from "@aws-amplify/datastore";
import ImageContext from "../../../context/ImageContext";
import FriendCard from "../../ui/FriendCard";
import { Link, useParams } from "react-router-dom";
import Header from "../../layout/Header";
import { Ride } from "../../../models";
import Button from "../../common/Button/Button";
import NewRideModal from "./Modals/NewRideModal";
import RideCard from "../../ui/RideCard";
import useFriendStore from "../../../stores/friendProfileStore";
import useEventStore from "../../../stores/eventStore";
import useDataClearedStore from "../../../stores/dataClearedStore";
import {getEventAttendeeProfiles} from "../../../services/eventServices";
import {useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../../stores/profileStore";

const EventDetailPage = () => {
  const { id } = useParams();
  const { route } = useAuthenticator(context => [context.route])
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles)
  const loadingFriendProfiles = useFriendStore(state => state.loadingFriends)
  const userProfile = useProfileStore(state => state.userProfile)
  const event = useEventStore(state => state.events).find(event => event.id === id)
  const [eventImage, setEventImage] = React.useState("");
  const [attendees, setAttendees] = useState<UserProfile[]>([]);
  const [attendeeFriends, setAttendeeFriends] = useState<UserProfile[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [isNewRideModalOpen, setIsNewRideModalOpen] = useState(false);
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { getSignedURL } = useContext(ImageContext);


  useEffect(() => {
    if(!event || !dataCleared) return;

    const fetchEventImage = async () => {
      return await getSignedURL(event.image, "public");
    };
    const fetchEventAttendeeProfiles = async () => {
      return await getEventAttendeeProfiles(event.id)
    };
    try {
      fetchEventImage()
        .then(image => setEventImage(image));
      fetchEventAttendeeProfiles()
        .then(attendees => setAttendees(attendees))

      // Fetch rides
      const rideSub = DataStore.observeQuery(Ride, (c) => c.eventID.eq(id as string)
      ).subscribe(({ items }) => {
        // Todo: Remove old rides
        setRides(items);
      });
      return () => {
        rideSub.unsubscribe();
      };
    } catch (e) {
      console.log("Error fetching event data: ", e);
    }
  }, [event]);


  useEffect(() => {
    if (friendProfiles.length === 0 || loadingFriendProfiles) {
      return;
    }
    const friendIds = new Set(friendProfiles.map((friend) => friend.id));
    const newAttendeeFriends = attendees.filter((attendee) =>
      friendIds.has(attendee.id)
    );
    setAttendeeFriends(newAttendeeFriends);
  }, [friendProfiles, attendees, loadingFriendProfiles]);

  const renderRides = () => {
    if(route !== "authenticated") {
      return (
        <div className='my-6 text-2xl p-4'>
          You must be signed in to view rides and attend events.
        </div>
      )
    }

    if(!userProfile?.verified) {
      return (
        <div className='my-6 text-2xl p-4'>
          Your account must be verified to view rides and attend events.
        </div>
      )
    }

    return (
      <>
        {/* Ride Section */}
        <section className="w-full p-4">
          <div className=" my-4 flex justify-between">
            <h1 className="text-2xl">Rides</h1>
            <Button onClick={() => setIsNewRideModalOpen(true)}>
              Create Ride
            </Button>
          </div>
          {rides.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {rides.map((ride) => (
                <RideCard ride={ride} key={ride.id} className="w-full max-w-xl" />
              ))}
            </div>
          ) : (
            <div>No rides yet</div>
          )}
        </section>
        <section className="w-full p-4">
          {attendeeFriends.length > 0 && (
            <>
              <h2 className="text-2xl my-4">Friends Attending</h2>
              <div className="flex flex-wrap w-full">
                {attendeeFriends.map((attendee) => (
                  <FriendCard
                    profile={attendee}
                    link={true}
                    key={attendee.id}
                    className="m-4"
                  />
                ))}
              </div>
            </>
          )}
          <h2 className="text-2xl my-4">People Attending</h2>
          {attendees.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {attendees.map((attendee) => (
                <FriendCard
                  profile={attendee}
                  link={true}
                  key={attendee.id}
                  className="m-4"
                />
              ))}
            </div>
          ) : (
            <p>No one is attending this event</p>
          )}
        </section>
      </>
    )
  }

  return (
    <>
      <Header>
        <span className="mx-4 ">
          <Link className="underline text-primary-default " to="/">
            Events
          </Link>{" "}
          / {event?.name}
        </span>
      </Header>
      <div className="flex flex-col sm:flex-row w-screen sm:max-h-[75vh] h-full relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={eventImage}
          alt={event?.name}
        />
        {/* For screens smaller than 'md', position the event details div normally (i.e., below the image).
      For 'md' screens and larger, position it absolutely as before. */}
        <div className="sm:rounded-xl shadow-xl z-10 text-primary-default border sm:border-b-green-950 sm:absolute bottom-4 left-4 bg-white p-4 bg-light-default min-w-[250px]">
          <h1 className="text-xl my-2">{event?.name}</h1>
          <p className="my-2"> {event?.location}</p>
          <p className="my-2">{event?.startDate} - {event?.endDate}</p>
          <p className="my-2">{event?.url}</p>
        </div>
      </div>
      <div>
        <h1>About this event</h1>
        <p>{event?.description}</p>
      </div>
      {renderRides()}
      {event && (
        <NewRideModal
          isOpen={isNewRideModalOpen}
          setIsOpen={setIsNewRideModalOpen}
          event={event}
        />
      )}
    </>
  );
};

export default EventDetailPage;
