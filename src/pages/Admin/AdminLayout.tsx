import Header from "../../components/layout/Header";
import React, {useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {Auth} from "@aws-amplify/auth";
import Nav from "../../components/layout/Nav";
import AdminEventLayout from "./Events/AdminEventLayout";
import {Route} from "react-router-dom";
import {IonContent, IonPage, IonRouterOutlet} from "@ionic/react";
import VerifyAccounts from "./VerifyAccounts";
import AdminDatabasePage from "./AdminDatabasePage";

const NavItems = [
  { content: "Events", link: "/admin/events" },
  { content: "Accounts", link: "/admin/accounts" },
 // { content: "Database", link: "/admin/database" }
]

const AdminLayout = () => {
  const [group, setGroup] = useState("")
  const { route } = useAuthenticator((context) => [context.route]);

  console.log(group)

  useEffect(() => {
    if(route !== "authenticated") return;
    Auth.currentAuthenticatedUser()
      .then(user => {
        setGroup(user.signInUserSession.accessToken.payload["cognito:groups"].find((group: string) => group === "admin")?.toString() ?? "")
      })
  }, [route])


  if (group !== "admin") {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
      </div>
    )
  }

  return (
    <IonPage>
      <Header>
        <Nav items={NavItems} className="flex"/>
      </Header>
      <IonContent>
        <IonRouterOutlet>
          <Route path="/admin/events" component={AdminEventLayout}/>
          <Route exact path="/admin/accounts" component={VerifyAccounts}/>
          <Route exact path="/admin/database" component={AdminDatabasePage}/>
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  )
}

export default AdminLayout