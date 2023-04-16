import ConversationCreateForm from "../ui-components/ConversationCreateForm";
import React from "react";
import {FestivalCreateForm} from "../ui-components";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {search} from "ionicons/icons";
import AccountButton from "../components/AccountButton";

const Admin = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin - Testing Only</IonTitle>
          <IonButtons slot='end'>
            <AccountButton id='admin'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='flex flex-col items-center justify-center w-full'>
          <section className='w-full max-w-xl'>
            <h2>Create Conversation</h2>
            <ConversationCreateForm/>
          </section>
          <section className='w-full max-w-xl'>
            <h2>Create Festival</h2>
            <FestivalCreateForm/>
          </section>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Admin