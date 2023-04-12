import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon, IonItem, IonLabel,
  IonPage,
  IonRouterOutlet,
  IonToolbar
} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import Tab1 from "./Events";
import Tab2 from "./Friends";
import MessagePage from "./Messages";
import AccountPage from "./Account";
import Admin from "./Admin";
import ProfilePage from "./Profile";
import React from "react";
import {chatboxEllipses, musicalNotes, people, person, settings} from "ionicons/icons";
import Friends from "./Friends";
import FriendsPage from "./Friends";
import Events from "./Events";
import styled from "styled-components";

const IonPageStyled = styled(IonPage)`

  .sc-ion-buttons-md-s ion-button {
    height: 100%;
  }
`

const IonButtonStyled = styled(IonButton)`
  height: 100%;
  
  &::part(native) {
    
  }
`

const Layout = () => {
  return (
    <IonPageStyled>
      <IonContent>
      <IonRouterOutlet>
        <Route path="/friends">
          <FriendsPage />
        </Route>
        <Route path="/messages">
          <MessagePage />
        </Route>
        <Route path='/account'>
          <AccountPage/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/friends/profile/:id' component={ProfilePage}/>
        <Route exact path="/">
          <Events/>
        </Route>
      </IonRouterOutlet>
      </IonContent>
      <IonFooter>
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
      </IonFooter>
    </IonPageStyled>
  )
}

export default Layout