import React, { useState } from "react";
import Nav from "../../../components/layout/Nav";
import {IonContent, IonPage} from "@ionic/react";
import CreateEventPage from "./CreateEventPage";
import UpdateEventPage from "./UpdateEventPage";
import DeleteEventPage from "./DeleteEventPage";
import Button from "../../../components/common/Button/Button";
import Header from "../../../components/layout/Header";
import { adminNavItems } from "../adminData";

type EventState = "Create" | "Update" | "Delete";

const navItems = [
  { content: "Create", link: '/admin/events/create'},
  { content: "Update", link: "/admin/events/update"},
  { content: "Delete", link: "/admin/events/delete"}
]

const AdminEvent = () => {
  const [state, setState] = useState<EventState>("Create");

  const renderState = () => {
    if(state === "Create") return <CreateEventPage/>
    if(state === "Delete") return <DeleteEventPage/>
    if(state === "Update") return <UpdateEventPage/>
  }

  return (
    <IonContent>
      <div className="w-full flex justify-center">
        { navItems.map(item => 
          <Button className="my-4 mx-2" key={item.content} onClick={() => setState(item.content as EventState)}>
            {item.content}
          </Button>
        )}
      </div>
      {renderState()}
    </IonContent>
  )
}

export default AdminEvent;