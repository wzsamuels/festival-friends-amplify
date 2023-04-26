import {IonButtons, IonContent, IonHeader, IonPage, IonToolbar} from "@ionic/react";
import React from "react";
import AccountButton from "../../components/Profile/AccountButton";

const RidesPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='end'>
            <AccountButton id={'rides-page'}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Rides
      </IonContent>
    </IonPage>
  )
}

export default RidesPage