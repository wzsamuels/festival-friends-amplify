import ConversationCreateForm from "../ui-components/ConversationCreateForm";
import React from "react";
import {FestivalCreateForm} from "../ui-components";
import {IonContent, IonPage} from "@ionic/react";

const Admin = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='flex flex-col items-center w-full'>
          <ConversationCreateForm/>
          <FestivalCreateForm/>
        </div>
      </IonContent>
    </IonPage>

  )
}

export default Admin