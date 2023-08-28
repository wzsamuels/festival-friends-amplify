import React, {useCallback, useEffect, useState} from "react";
import {Redirect, Route} from "react-router-dom";
import {
  BsEmojiSmile,
  BsFillChatSquareDotsFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
import LandingPage from "../../pages/landing/page";
import AccountLayout from "../../pages/account/layout";
import useProfileStore from "../../stores/profileStore";
import LoadingState from "../ui/LoadingState";
import AccountUnverified from "../../pages/account/AccountUnverified";
import Header from "./Header";
import {LocalNotifications} from "@capacitor/local-notifications";
import logo from "../../assests/images/logo.svg";
import {getAllEvents} from "../../services/eventServices";
import {Geolocation} from "@capacitor/geolocation";
import calculateDistance from "../../lib/calculateDistance";
import EventPage from "../../pages/events/page";
import useFriendStore from "../../stores/friendProfileStore";
import useDataClearedStore from "../../stores/dataClearedStore";
import useEventStore from "../../stores/eventStore";
import useQueueStore from "../../stores/queueStore";
import {DataStore} from "@aws-amplify/datastore";
import {IonContent, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import GroupLayout from "../../pages/GroupPage/layout";
import Friends from "../../pages/FriendPage/page";
import "../../index.css";
import '@aws-amplify/ui-react/styles.css';
import '@ionic/react/css/core.css';
import '../../variables.css'
import MessagePage from "../../pages/messages/page";
import EventDetailPage from "../../pages/events/EventDetailPage";
import {useAuth0} from "@auth0/auth0-react";
import ProfilePage from "../../pages/ProfilePage/page";
import {Hub} from "aws-amplify";
import AdminLayout from "../../pages/Admin/layout";
import {Capacitor} from "@capacitor/core";

const Layout = () => {
  const { loadingUserProfile, userProfile } = useProfileStore();
  const fetchUserProfile = useProfileStore(state => state.fetchUserProfile)
  const fetchFriendProfiles = useFriendStore(state => state.fetchFriends)
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const fetchEvents = useEventStore(state => state.fetchEvents)
  const { dataStoreQueue } = useQueueStore();
  const [dataStoreReady, setDataStoreReady] = useState(false);
  const { user, isLoading, isAuthenticated } = useAuth0();
  const email = user?.email;

  useEffect(() => {
    DataStore.start().then(() => console.log("DataStore started"))

    // Create listener
    const listener = Hub.listen("datastore", async hubData => {
      const  { event, data } = hubData.payload;
      if (event === "ready") {
        console.log("DataStore ready");
        setDataStoreReady(true);
        fetchEvents();
      }
    })

// Remove listener
    return () => {
      listener();
    }
  }, []);

  useEffect(() => {
    if(!dataCleared || !email || !isAuthenticated || isLoading || !dataStoreReady) return;
    console.log("Data cleared: ", dataCleared, ", email: ", email)
    dataStoreQueue.enqueue(async () => {
      fetchUserProfile(email);
    });
  }, [email, dataCleared, isAuthenticated, isLoading, dataStoreReady])

  useEffect(() => {
    if(!dataCleared || !userProfile) return;

    fetchFriendProfiles(userProfile);
  }, [dataCleared, userProfile])

  useEffect(() => {
    document.body.focus();
  }, []);

  const notificationEffect = useCallback(async () => {
    console.log("Notification effect")
    let permissions;
    if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === "android") {
      permissions = await Geolocation.requestPermissions();
    } else {
      permissions = await Geolocation.checkPermissions();
    }
    
    console.log("Permissions: ", permissions)
    if(permissions.location !== "granted") {
      console.log("Permissions not found")
      return;
    }
    console.log("Permissions: ", permissions);
    const userCoords = await Geolocation.getCurrentPosition();
    const events = await getAllEvents();
    const now = new Date();
    console.log(`Current cords: ${userCoords.coords.latitude}, ${userCoords.coords.longitude}`)

// Set the current date time to the start of the day
    now.setHours(0, 0, 0, 0);

    const eventMap = await Promise.all(events.map(async (event) => {
      if(!(event.latitude && event.longitude)) return false;

      const latitude = event.latitude;
      const longitude = event.longitude;
      const miles = calculateDistance(userCoords.coords.latitude, userCoords.coords.longitude, latitude, longitude)
      console.log(event.name, miles)
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      // Set the end date to the end of the day
      endDate.setHours(23, 59, 59, 999);

      // Now check if the 'now' is between the start and end dates
      //   console.log(`Event: ${event.name}, Start Date ${startDate}, End Date ${endDate}, Miles ${miles}`);

      return now >= startDate && now <= endDate && miles < 200;
    }));
    const filteredEvents = events.filter((_, idx) => eventMap[idx]);
    console.log(`${filteredEvents.length} Filtered Events: `, filteredEvents);
    if(filteredEvents.length === 0) return;

    let text = ""
    for(const event of filteredEvents) {
      text += `${event.name} is happening in ${event.city}, ${event.state}!\n`
    }
    LocalNotifications.requestPermissions().then(res => {
      console.log(res);
      LocalNotifications.schedule({
        notifications: [
          {
            title: "There are events in your area!",
            body: text,
            id: 1,
            //schedule: { at: new Date(Date.now() + 5) }, // 5 seconds from now
            actionTypeId: "",
            extra: null
          }
        ]
      }).then(res => {
        console.log(res);
      });
    })
    new Notification("There are events in your area!", { body: text, icon: logo });

  }, [])

  useEffect(() => {
    if(!userProfile) return;
    notificationEffect();
  }, [userProfile])

  if(userProfile?.verified) {
    return (
      <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
        <div className="pt-9 md:pt-10 pb-footer">
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact from="/" to="/events" />
              <Route exact path="/events" component={EventPage}/>
              <Route path="/events/:id" component={EventDetailPage} />
              <Route path="/account" component={AccountLayout} />
              <Route path="/admin" component={AdminLayout}/>
              <Route exact path="/friends" component={Friends} />
              <Route path="/friends/profile/:id" component={ProfilePage} />
              <Route path="/groups" component={GroupLayout}/>
              <Route path="/messages" component={MessagePage} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" className="shadow-dropdown flex justify-around items-center bg-lightYellow text-black">
              <IonTabButton tab="tab1" href="/events" className="flex flex-1 flex-shrink visited:text-black">
                <CalendarDaysIcon
                  className="h-5"
                  aria-hidden="true"
                />
                <IonLabel>Events</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/friends">
                <BsEmojiSmile
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <IonLabel>Friends</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/messages">
                <BsFillChatSquareDotsFill
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <IonLabel>Messages</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/groups">
                <BsFillPeopleFill
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <IonLabel>Groups</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </div>
      </div>
    );
  }

  if (loadingUserProfile || isLoading || !dataStoreReady) {
    return <LoadingState />;
  }

  if(!isAuthenticated) {
    return (
      <LandingPage/>
    )
  }

  if (!userProfile) {
    return (
      <IonPage>
        <Header/>
        <IonContent>
          <AccountUnverified />
        </IonContent>
      </IonPage>

    )
  }

  if (!userProfile?.verified && userProfile?.submitted) {
    return (
      <>
        <Header className="shadow-xl" />
        <div className="flex w-full h-full justify-center items-center flex-col p-4">
          <div className="max-w-lg">
            <div className="my-4">
              Your profile has been submitted for verification. You&apos;ll
              receive an email at the address you used to sign up for this account
              once the process has been completed.
            </div>
            <div className="my-4">
              If you&apos;ve received confirmation that your profile has been
              verified but are still seeing this message, please try refreshing
              this page.
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Layout;