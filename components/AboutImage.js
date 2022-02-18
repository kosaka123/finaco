function AboutImage() {
  return (
    <div className="w-full h-full md:w-6/12 lg:w-4/12 px-12 mx-auto animate-fade-in-down ">
      <div className=" h-3/4 flex mt-10 w-full shadow-lg rounded-lg border-gray-50 border-8 ">
        <img
          alt=""
          src="logo.png"
          className="w-full align-middle rounded-lg h-full"
        />
      </div>
    </div>
  );
}

export default AboutImage;
