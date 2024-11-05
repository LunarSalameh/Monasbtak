import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Layout from "../components/Layout/Layout";
import WebsiteDesc from "../components/WebsiteDesc";

const Home = () => {
  // getAllCategories
  return (
    <Layout>
      <Slider />
      <Categories />
      <WebsiteDesc />
    </Layout>
  );
};

export default Home;
