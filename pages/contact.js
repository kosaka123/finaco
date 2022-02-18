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

      <div className="w-full flex justify-between mt-3 ">
        <div className="w-full lg:flex lg:justify-around mt-3 sm:grid sm:grid-cols-1">
          {/*form */}
          <div className="lg:w-3/5 flex justify-center items-center sm:col-span-1">
            <Form />
          </div>

          {/*information */}
          <div className=" flex xl:w-2/5 lg:justify-start lg:items-center sm:col-span-1 sm:justify-center sm:mt-3 ">
            <div className="w-4/5 h-full">
              <div className="w-full lg:h-1/2 bg-white border-white rounded-lg border-8 shadow-xl mb-2 sm:h-full">
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
              <div className="w-full h-1/2  bg-white dark:bg-blue-500 rounded-lg shadow-xl border-white border-8">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-0 sm:mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default contact;
