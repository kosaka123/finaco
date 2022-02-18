import Footer from "../components/Footer";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import dynamic from "next/dynamic";

function contact() {
  const Map = dynamic(() => import("../components/NewGoogleMap"), {
    ssr: false,
  });
  return (
    <div className="w-full h-full bg-gray-50">
      <Navbar />

      <div className="w-full flex justify-center">
        <div className="w-4/5 bg-white border-white rounded-lg border-8 shadow-xl absolute z-40 sm:grid sm:grid-cols-1 xl:mt-20">
          <div className="w-full ">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-center text-green-700 border-b-2  dark:text-gray-50">
                Get In Touch
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <div className="w-full lg:flex lg:justify-around">
              {/*form */}
              <div className="lg:w-3/5 flex justify-center items-center ">
                <Form />
              </div>

              {/*information */}
              <div className=" flex h-full xl:w-2/5  sm:w-full lg:justify-start lg:items-center sm:justify-center sm:mt-3 ">
                <div className="w-4/5  h-full sm:h-[600px] sm:grid sm:grid-cols-1">
                  <div className="w-full  h-1/2  border-white border-8 ">
                    <div className="flex justify-center items-center mt-8 w-full  text-gray-600 dark:text-gray-400">
                      <LocationMarkerIcon className="w-12 h-12 text-gray-500" />
                      <div className="ml-4 text-lg tracking-wide font-semibold ">
                        臺中市霧峰區五福西路248號
                      </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full  text-gray-600 dark:text-gray-400">
                      <PhoneIcon className="w-12 h-12 text-gray-500" />
                      <div className="ml-4 text-lg tracking-wide font-semibold ">
                        +886-(0)4-2330-5860
                      </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full  text-gray-600 dark:text-gray-400">
                      <MailIcon className="w-12 h-12 text-gray-500" />
                      <div className="ml-4 text-lg tracking-wide font-semibold ">
                        finaco@ms41hinet.net
                      </div>
                    </div>
                  </div>
                  {/*Map */}
                  <div className="w-full lg:h-[300px] sm:h-[300px]  rounded-lg shadow-xl border-white border-4">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1/2 relative">
        <div className="w-full lg:h-[450px]  bg-gradient-to-r from-green-700 via-greeb-600 to-green-500" />
      </div>
      <div className="w-full xl:mt-80 sm:mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default contact;
