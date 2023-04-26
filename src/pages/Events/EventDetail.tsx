import React, {useContext, useEffect, useState} from 'react'
import {Festival} from "../../models";
import {
  IonBackButton, IonBreadcrumb,
  IonBreadcrumbs,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {Storage} from "aws-amplify";
import {RouteComponentProps} from "react-router";
import {DataStore} from "@aws-amplify/datastore";
import ImageContext from "../../context/ImageContext";

type EventDetailPageProps = RouteComponentProps<{
  id: string;
}>

const EventDetailPage = ({match} : EventDetailPageProps) => {
  const [event, setEvent] = useState<Festival>();
  const [eventImage, setEventImage] =  React.useState('');
  const id = match.params.id;
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await DataStore.query(Festival, c => c.id.eq(id));
      const image = await getSignedURL(event[0].image);
      setEvent(event[0]);
      setEventImage(image);
    }
    fetchEvent();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBreadcrumbs slot='start'>
            <IonBreadcrumb routerLink="/events">Events</IonBreadcrumb>
            <IonBreadcrumb>{event?.name}</IonBreadcrumb>
          </IonBreadcrumbs>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src={eventImage} alt={event?.name}/>
      </IonContent>
    </IonPage>
  )
}

export default EventDetailPage