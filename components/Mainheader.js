function Mainheaders() {
  const cores = [
    {
      chi: "身體",
      eng: "BODY",
    },
    {
      chi: "靈魂",
      eng: "SPIRIT",
    },
    {
      chi: "心理",
      eng: "PSYCHOLOGICAL",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute  w-full h-full">
        <div className="w-full mt-10 bg-black text-yellow-500 text-center text-2xl font-semibold">
          <h1>注重大健康的唯一信賴保健食品品牌</h1>
        </div>

        <div className="w-full  h-96 grid grid-cols-3">
          {cores.map((core, i) => (
            <div
              key={i}
              className="w-full h-full flex justify-center items-center"
            >
              <div className="w-2/3 h-1/3">
                <div className="w-full text-center">
                  <div className="relative flex justify-center items-center w-full h-10 ">
                    <div className="w-full">
                      <div className="absolute  mt-11 text-3xl h-14 rounded-3xl flex justify-center items-center w-full bg-black text-white">
                        <p className="mt-2 w-full ">{core.eng}</p>
                      </div>
                      <div className="absolute w-full text-white text-6xl">
                        <p>{core.chi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full ">
          <div className="relative w-full ">
            <div className="absolute mt-10 h-[310px] flex justify-center bg-opacity-95 bg-black items-center w-full text-white">
              <p className="w-full text-center mb-44 text-5xl tracking-widest">
                Bio FINACO
              </p>
              <div className="absolute flex justify-center items center mt-5">
                <a href="https://lin.ee/u6IvbnV">
                  <img
                    height="36"
                    border="0"
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
                  />
                </a>
              </div>
              <div className="absolute text-xl w-full flex justify-end items-end bottom-7">
                <div className="flex justify-between w-3/4 text-center">
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>牛樟芝萃取滴粒</p>
                  </div>
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>褐藻膠萃取隨身包</p>
                  </div>
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>法國美顏膠原蛋白</p>
                  </div>
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>明亮石斛滴粒</p>
                  </div>
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>黑鑽瑪卡滴粒</p>
                  </div>
                  <div className=" border-r-2 border-white w-1/6 cursor-pointer">
                    <p>等多項產品熱賣中</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full text-white text-6xl text-center font-bold ">
              <p className=" drop-shadow-2xl">樺齡生物科技</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-3/4">
        <img
          src="https://previews.123rf.com/images/pakhnyushchyy/pakhnyushchyy1112/pakhnyushchyy111200149/11526094-green-forest-background-in-a-sunny-day.jpg"
          alt=""
          className="w-full lg:h-[800px] object-fill"
        />
      </div>
    </div>
  );
}

export default Mainheaders;
