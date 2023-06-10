import Header from "../../layout/Header";
import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {Auth} from "aws-amplify";

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
      <Header>
        <div className='w-full flex justify-around'>
          <Link to="/admin">Events</Link>
          <Link to="/admin/accounts">Accounts</Link>
          <Link to="/admin/database">Database</Link>
        </div>
      </Header>
      <div className='my-8 p-4'>
        <Outlet/>
      </div>
    </>
  )
}

export default AdminLayout