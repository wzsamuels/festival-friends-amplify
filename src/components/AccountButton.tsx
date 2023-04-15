import {IonButton, IonIcon, IonItem, IonPopover, IonRouterLink} from "@ionic/react";
import {personCircle} from "ionicons/icons";
import React from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";

const AccountButton = () => {
  const { signOut, user } = useAuthenticator()
  return (
    <>
      <IonButton id="click-trigger">
        <IonIcon size='large' icon={personCircle} id="click-trigger"/>
      </IonButton>
      <IonPopover trigger="click-trigger" showBackdrop={false} dismissOnSelect={true}  triggerAction="hover">
        {
          user ?
            <>
              <IonItem className='w-full cursor-pointer' routerLink='/account'>Account</IonItem>
              <IonItem className='w-full cursor-pointer' onClick={signOut}>Sign Out</IonItem>
            </>
            :
            <>
              <IonItem className='w-full cursor-pointer' routerLink='/account'>Login In / Sign Up</IonItem>
            </>
        }
      </IonPopover>
    </>
  )
}

export default AccountButton