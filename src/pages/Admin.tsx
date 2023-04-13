import ConversationCreateForm from "../ui-components/ConversationCreateForm";
import React from "react";
import {FestivalCreateForm} from "../ui-components";
import {IonContent, IonPage} from "@ionic/react";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='flex flex-col items-center w-full max-w-xl'>
          <section className='w-full'>
            <h2>Create Conversation</h2>
            <ConversationCreateForm/>
          </section>
          <FestivalCreateForm/>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Admin