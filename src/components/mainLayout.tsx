import { Layout } from "antd";
import HeaderStyled from "./headerStyled";
import MainContent from "./mainContent";

const MainLayout = () => {
  return (
    <Layout>
      <HeaderStyled />
      <MainContent />
    </Layout>
  );
};

export default MainLayout;
