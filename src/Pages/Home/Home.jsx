import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border lg:col-span-2">News coming soon...</div>
        <div >
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
