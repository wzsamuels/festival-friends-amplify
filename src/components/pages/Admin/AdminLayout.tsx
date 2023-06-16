import Header from "../../layout/Header";
import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {Auth} from "@aws-amplify/auth";
import Nav from "../../layout/Nav";

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
    <>
      <Header className="">
        <Nav items={NavItems} className="flex"/>
      </Header>
      <Outlet/>
    </>
  )
}

export default AdminLayout