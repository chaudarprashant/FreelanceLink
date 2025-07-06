import React from "react";
import ServiceProviderForm from "./ServiceProviderForm";
import NewWork from "./NewWork";
import AdminServices from "./AdminServices";
import AddTopProject from "./AddTopProject";

const AdminDashboard = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Only show NewWork if user is a service provider
  const isServiceProvider = user?.role === "service-provider"; // Adjust if your role name is different

  // console.log("NewWorks loaded", user?._id);

  const token = localStorage.getItem("token");

  return (
    <div className="container mt-5">
      
     {user?._id && <NewWork/>} {/* Only for logged-in service providers */}
      <AdminServices token={token} />
      <ServiceProviderForm />
      <AddTopProject/>
    </div>
  );
};

export default AdminDashboard;
