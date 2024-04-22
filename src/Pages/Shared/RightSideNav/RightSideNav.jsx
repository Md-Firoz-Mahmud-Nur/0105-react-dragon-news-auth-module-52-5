import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-4 p-4">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline  w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline  w-full">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>
      <div className="mb-6 p-4">
        <h2 className="mb-4 text-3xl">Find Us on</h2>
        <a
          className="flex items-center rounded-t-lg border p-4 text-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="flex items-center border-x p-4 text-lg" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="flex items-center rounded-b-lg border p-4 text-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Facebook</span>
        </a>
      </div>{" "}
      {/* q zone */}
      <div className="mb-6 space-y-3 p-4">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
