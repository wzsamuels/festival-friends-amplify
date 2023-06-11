import React from "react";
import { Outlet} from "react-router-dom";
import Nav from "../../../layout/Nav";

const navItems = [
  { content: 'Approve', link: '/admin/events'},
  { content: "Create", link: '/admin/events/create'},
  { content: "Update", link: "/admin/events/update"},
  { content: "Delete", link: "/admin/events/delete"}
]

const AdminEventLayout = () => {


  return (
    <>
      <Nav items={navItems} className="shadow-xl"/>
      <div className="mt-4">
        <Outlet/>
      </div>
    </>
  )
}

export default AdminEventLayout;