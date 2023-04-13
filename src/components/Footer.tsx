import {IonButton, IonButtons, IonFooter, IonIcon, IonLabel, IonToolbar} from "@ionic/react";
import {chatboxEllipses, musicalNotes, people, settings} from "ionicons/icons";
import React from "react";
import styled from "styled-components";

const IonFooterStyled = styled(IonFooter)`

  .sc-ion-buttons-md-s ion-button {
    height: 100%;
  }
`

const IonButtonStyled = styled(IonButton)`
  height: 100%;
  
  &::part(native) {
    
  }
`

const Footer = () => {
  return (
    <IonFooterStyled>
      <IonToolbar className=''>
        <IonButtons slot="" className=''>
          <div className='flex justify-center w-full'>
            <IonButtonStyled routerLink="/" className='h-full p-0'>
              <div className='flex flex-col w-full items-center flex-wrap'>
                <IonIcon size='large' aria-hidden="true" icon={musicalNotes} />
                <IonLabel>Events</IonLabel>
              </div>
            </IonButtonStyled>
            <IonButtonStyled routerLink="/friends">
              <div className='flex flex-col w-full items-center'>
                <IonIcon size='large' aria-hidden="true" icon={people} />
                <IonLabel>Friends</IonLabel>
              </div>
            </IonButtonStyled>
            <IonButtonStyled routerLink="/messages">
              <div className='flex flex-col w-full items-center'>
                <IonIcon size='large' aria-hidden="true" icon={chatboxEllipses} />
                <IonLabel>Messages</IonLabel>
              </div>
            </IonButtonStyled>
            <IonButtonStyled routerLink="/admin">
              <div className='flex flex-col w-full items-center'>
                <IonIcon size='large' aria-hidden="true" icon={settings} />
                <IonLabel>Admin</IonLabel>
              </div>
            </IonButtonStyled>
          </div>
        </IonButtons>
      </IonToolbar>
    </IonFooterStyled>
  )
}

export default Footer