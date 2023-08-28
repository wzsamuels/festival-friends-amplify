import React from "react"
import { IonContent, IonPage, IonRouterOutlet } from "@ionic/react"
import Header from "../../components/layout/Header"
import Nav from "../../components/layout/Nav"
import { adminNavItems } from "./adminData"
import { Route } from "react-router"
import AdminEvent from "./Events/page"
import VerifyAccounts from "./accounts/page"
import { useAuth0 } from "@auth0/auth0-react"

const AdminLayout = () => {
  const {user, isAuthenticated} = useAuth0();

  if(!isAuthenticated || user?.email !== "wzsamuels@gmail.com") {
    return <div>You are not authorized to view this page.</div>
  }

  return (
    <IonPage>
      <Header>
        <Nav items={adminNavItems} className="flex"/>
      </Header>
      <IonContent>
        <IonRouterOutlet>
          <Route path="/admin/events" component={AdminEvent} />
          <Route path="/admin/accounts" component={VerifyAccounts}/>
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  )
}

export default AdminLayout