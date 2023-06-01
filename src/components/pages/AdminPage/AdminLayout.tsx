import Header from "../../layout/Header";
import {Link, Outlet} from "react-router-dom";
import React from "react";

const AdminLayout = () => {
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