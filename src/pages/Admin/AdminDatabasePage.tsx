import SeedDatabasePage from "./SeedDatabasePage";
import ClearDatabase from "./ClearDatabase";
import React from "react";

const AdminDatabasePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <section className="w-full max-w-xl my-8">
        <SeedDatabasePage/>
      </section>
      <section className="w-full max-w-xl my-8">
        <ClearDatabase/>
      </section>
    </div>
  )
}

export default AdminDatabasePage;