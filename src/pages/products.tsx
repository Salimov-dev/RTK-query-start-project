import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/sider";
import MainLayout from "../components/mainLayout";

const ProductsPage: React.FC = () => {
  return (
    <Layout style={{ width: "100%", minHeight: "100vh", height: "100%" }}>
      <Sidebar />
      <MainLayout />
    </Layout>
  );
};

export default ProductsPage;
