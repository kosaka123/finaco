import Head from "next/head";
import FacebookData from "../components/FacebookData";
import Footer from "../components/Footer";
import Mainheader from "../components/Mainheader";
import Navbar from "../components/Navbar";
import PublicitySlider from "../components/PublicitySlider";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Finaco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <div className="w-full h-full">
          <Mainheader />

          <div className="w-full lg:flex sm:flex-row justify-center items-center mx-auto mt-10">
            <div className="w-1/2 lg:flex-row  sm:w-3/4 sm:mx-auto">
              <Slider />
              <FacebookData />
            </div>

            <div className="lg:w-1/2  sm:w-full sm:mx-auto">
              <PublicitySlider />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
