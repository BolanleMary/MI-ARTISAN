import Mechanic from "../assets/Mechanic.png";
import Plumber from "../assets/Plumber.jpg";
import Tailor from "../assets/Tailor.png";
import DryCleaner from "../assets/DryCleaner.png";
import Caregiver from "../assets/Caregiver.jpeg";
import { Link } from "react-router-dom";

export default function ExploreOurServices() {
  return (
    <div className="flex flex-col md:grid  md:grid-cols-2 lg:flex lg:flex-row gap-4 text-[#fff] pl-10 ">
      <div className="p-4 text-white  bg-[#09AB46] border-solid border-2 border-[#09AB46] rounded-xl w-72  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2x">
        <img src={Caregiver} alt="Caregiver" className="mb-8" />
        <p className="text-2xl font-bold font-mono mb-5">Care Giver</p>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Massa,
          <br />
          fermentum id id vitae, integer <br />
          fermentum tellus. In vitae id nisl quis <br />
          ornare diam commodo in vel dolor.
        </p>
        <p>
          <Link to="/artisan-list">
            <button className=" mt-4 float-right outline outline-2 outline-[#09AB46] px-8 py-2 rounded-lg outline-onset-2  shadow-md shadow-black">
              <p>Get Now</p>
            </button>
          </Link>
        </p>
      </div>
      <div className=" p-4 text-white  bg-[#09AB46] border-solid border-2 border-green-600 rounded-xl w-72  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2x">
        <img src={Mechanic} alt="Mechanic pics" className="w-64 h-44 mb-8" />
        <p className="text-2xl font-bold font-mono mb-5">Mechanic</p>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Massa,
          <br />
          fermentum id id vitae, integer <br />
          fermentum tellus. In vitae id nisl quis <br />
          ornare diam commodo in vel dolor.
        </p>
        <p className=" items-end border-solid border-1 border-inherit ">
          <Link to="/artisan-list">
            <button className=" mt-4 float-right outline outline-2 outline-[#09AB46] px-8 py-2 rounded-lg outline-onset-2  shadow-md shadow-black">
              <p>Get Now</p>
            </button>
          </Link>
        </p>
      </div>
      <div className="p-4 text-white  bg-[#09AB46] border-solid border-2 border-green-600 rounded-xl w-72 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2x">
        <img src={Plumber} alt="" className="w-64 h-44 mb-8" />
        <p className="text-2xl font-bold font-mono mb-5">Plumber</p>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Massa,
          <br />
          fermentum id id vitae, integer <br />
          fermentum tellus. In vitae id nisl quis <br />
          ornare diam commodo in vel dolor.
        </p>
        <p className=" border-solid border-1 border-inherit ">
          <Link to="/artisan-list">
            <button className=" mt-4 float-right outline outline-2 outline-[#09AB46] px-8 py-2 rounded-lg outline-onset-2  shadow-md shadow-black">
              <p>Get Now</p>
            </button>
          </Link>
        </p>
      </div>
      <div className="p-4 text-white  bg-[#09AB46] border-solid border-2 border-green-600 rounded-xl w-72 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2x">
        <img src={Tailor} alt="" className="w-64 h-44 mb-8" />
        <p className="text-2xl font-bold font-mono mb-5">Tailor</p>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Massa,
          <br />
          fermentum id id vitae, integer <br />
          fermentum tellus. In vitae id nisl quis <br />
          ornare diam commodo in vel dolor.
        </p>
        <p className=" items-end border-solid border-1 border-inherit ">
          <Link to="/artisan-list">
            <button className=" mt-4 float-right outline outline-2 outline-[#09AB46] px-8 py-2 rounded-lg outline-onset-2  shadow-md shadow-black">
              <p>Get Now</p>
            </button>
          </Link>
        </p>
      </div>
      <div className=" p-4 text-white  bg-[#09AB46] border-solid border-2 border-green-600 rounded-xl w-72 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2x">
        <img src={DryCleaner} alt="" className="w-64 h-44 mb-8" />
        <p className="text-2xl font-bold font-mono mb-5">Dry Cleaner</p>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Massa,
          <br />
          fermentum id id vitae, integer <br />
          fermentum tellus. In vitae id nisl quis <br />
          ornare diam commodo in vel dolor.
        </p>
        <p className=" items-end border-solid border-1 border-inherit ">
          <Link to="/artisan-list">
            <button className=" mt-4 float-right outline outline-2 outline-[#09AB46] px-8 py-2 rounded-lg outline-onset-2  shadow-md shadow-black">
              <p>Get Now</p>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
