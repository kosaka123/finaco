import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

function AboutInfo() {
  return (
    <div>
      <div className="w-full flex justify-center mt-10">
        <AboutImage />
        <AboutText />
      </div>
    </div>
  );
}

export default AboutInfo;
