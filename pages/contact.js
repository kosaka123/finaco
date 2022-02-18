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
    <div className="w-full h-full bg-gray-100">
      <Navbar />

      <div className="w-full flex justify-center">
        <div className="w-4/5  absolute z-40 sm:grid sm:grid-cols-1 xl:mt-8 sm:mt-5 bg-white border-white rounded-lg  shadow-xl">
          <div
            className="w-full h-[250px] rounded-t-lg opacity-80 bg-cover flex justify-center"
            style={{ backgroundImage: "url(get.jpg)" }}
          >
            <div className=" w-4/6 h-4/5 bg-white lg:mt-6 bg-opacity-50 rounded-lg sm:mt-6">
              <div className="flex justify-center lg:mt-5 sm:mt-8">
                <h1 className="lg:text-6xl  sm:text-5xl font-bold text-center text-green-700   ">
                  Get In Touch!
                </h1>
              </div>
              <div className="flex justify-center lg:mt-2 sm:mt-5">
                <p className="lg:text-3xl sm:text-lg text-center text-black  ">
                  For more info or inqury about our product and pricing
                </p>
              </div>
              <div className="flex justify-center">
                <p className="lg:text-3xl sm:text-lg l text-center text-black  ">
                  please feel free to get in touch with us.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <div className="w-full lg:flex lg:justify-around">
              {/*form */}
              <div className="lg:w-3/5 flex justify-center items-center ">
                <Form />
              </div>

              {/*information */}
              <div className=" flex h-full xl:w-2/5   lg:justify-start lg:items-center sm:w-full sm:justify-center sm:mt-3 sm:h-[600px]">
                <div className="w-4/5  h-full sm:grid sm:grid-cols-1">
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

      <div className="w-full lg:h-full sm:h-[1500px] relative">
        <div className="w-full h-full">
          <img
            alt="conta"
            src="conta.jpg"
            className="w-full lg:h-[940px] sm:h-[1500px] opacity-80"
          />
        </div>
      </div>
      <div className="w-full h-full lg:mb-0 sm:mb-10">
        <Footer />
      </div>
    </div>
  );
}

export default contact;
