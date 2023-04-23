import React, {useEffect, useState} from 'react'
import {Festival} from "../../models";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {Storage} from "aws-amplify";
import {RouteComponentProps} from "react-router";
import {DataStore} from "@aws-amplify/datastore";

type EventDetailPageProps = RouteComponentProps<{
  id: string;
}>

const EventDetailPage = ({match} : EventDetailPageProps) => {
  const [event, setEvent] = useState<Festival>();
  const [eventImage, setEventImage] =  React.useState('');
  const id = match.params.id;

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await DataStore.query(Festival, c => c.id.eq(id));
      const image = await Storage.get(event[0].image);
      setEvent(event[0]);
      setEventImage(image);
    }
    fetchEvent();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{event?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src={eventImage} alt={event?.name}/>
      </IonContent>
    </IonPage>
  )
}

export default EventDetailPage