import React from "react";
import Nav from "../../../components/layout/Nav";
import {IonRouterOutlet} from "@ionic/react";
import {Route} from "react-router-dom";
import CreateEventPage from "./CreateEventPage";
import UpdateEventPage from "./UpdateEventPage";
import DeleteEventPage from "./DeleteEventPage";

const navItems = [
  //{ content: 'Approve', link: '/admin/events'},
  { content: "Create", link: '/admin/events'},
  { content: "Update", link: "/admin/events/update"},
  { content: "Delete", link: "/admin/events/delete"}
]

const AdminEventLayout = () => {


  return (
    <div className="">
      <div>
        <Nav items={navItems} className="shadow-xl flex pt-4 z-50"/>
      </div>
      <div className="mt-4">
        <IonRouterOutlet>
          <Route path="/admin/events" exact component={CreateEventPage} />
          <Route path="/admin/events/update" component={UpdateEventPage} />
          <Route path="/admin/events/delete" component={DeleteEventPage} />
        </IonRouterOutlet>
      </div>
    </div>
  )
}

export default AdminEventLayout;