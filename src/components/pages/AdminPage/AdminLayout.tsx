import Header from "../../layout/Header";
import {Link, Outlet} from "react-router-dom";
import React from "react";

const AdminLayout = () => {
  return (
    <>
      <Header>
        <div className='w-full flex justify-around'>
          <Link to="/admin/events">Events</Link>
          <Link to="/admin/accounts">Accounts</Link>
        </div>
      </Header>
      <div className='my-16 p-4'>
        <Outlet/>
      </div>
    </>
  )
}

export default AdminLayout