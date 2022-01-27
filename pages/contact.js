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

      <div className="w-full flex justify-between mt-3">
        <div className="w-full flex justify-around mt-3">
          {/*form */}
          <Form />
          {/*information */}
          <div className="w-1/2  px-6 py-6">
            <div className="w-full h-1/2  mb-2 bg-white dark:bg-blue-500 rounded-lg shadow-xl border-white border-8">
              <Map />
            </div>

            <div className="w-full h-1/2 bg-white border-white rounded-lg border-8 shadow-xl ">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
