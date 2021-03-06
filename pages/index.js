import Head from "next/head";
import HomeFBData from "../components/HomeFBData";
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

          <div className="w-full lg:flex sm:flex-row justify-center items-center mx-auto xl:mt-10 sm:mt-56">
            <div className="w-1/2 lg:flex-row  sm:w-3/4 sm:mx-auto">
              <Slider />
              <HomeFBData />
            </div>

            <div className="xl:w-1/2 xl:mb-36 sm:w-full sm:mx-auto ">
              <PublicitySlider />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
