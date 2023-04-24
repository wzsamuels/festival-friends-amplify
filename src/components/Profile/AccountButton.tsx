import {IonAlert, IonButton, IonIcon, IonItem, IonLabel, IonPopover } from "@ionic/react";
import {personCircle} from "ionicons/icons";
import React, {useContext} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import DataStoreContext, {DataStoreContextType} from "../../context/DataStoreContext";

const AccountButton = ({id} : {id: string}) => {
  const { signOut, user } = useAuthenticator()
  const { saveDataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);

  const handleSignOut = async () => {
    signOut()
    saveDataStoreCleared(false);
    setAlertIsOpen(true);
    await DataStore.clear();
    setAlertIsOpen(false)
    saveDataStoreCleared(true);
  }

  return (
    <>
      <IonButton id={id}>
        <IonIcon className='text-2xl' icon={personCircle}/>
      </IonButton>
      <IonPopover trigger={id} showBackdrop={false} dismissOnSelect={true} triggerAction="click">
        {
          user ?
            <>
              <IonItem>
                <IonLabel>{user?.attributes?.email}</IonLabel>
              </IonItem>
              <IonItem className='w-full cursor-pointer' routerLink='/account'>
                <IonLabel>Profile</IonLabel>
              </IonItem>
              <IonItem className='w-full cursor-pointer' routerLink='/account/settings'>
                <IonLabel>Account Settings</IonLabel>
              </IonItem>
              <IonItem className='w-full cursor-pointer' button onClick={handleSignOut}>Sign Out</IonItem>
            </>
            :
            <>
              <IonItem className='w-full cursor-pointer' routerLink='/account'>Login In / Sign Up</IonItem>
            </>
        }
      </IonPopover>
      <IonAlert isOpen={alertIsOpen} onDidDismiss={() => setAlertIsOpen(false)} header={'Logging out...'}></IonAlert>
    </>
  )
}

export default AccountButton