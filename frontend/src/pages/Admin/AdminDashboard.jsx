import React from "react";
import ServiceProviderForm from "./ServiceProviderForm";
import NewWork from "./NewWork";
import AdminServices from "./AdminServices";
const token = localStorage.getItem("token");

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <NewWork/>
      <AdminServices token={token} />;
      <ServiceProviderForm />  {/* Show the form automatically */}
    </div>
  );
};

export default AdminDashboard;
