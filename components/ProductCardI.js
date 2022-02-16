import maca01 from "../Picture/maca/maca01.jpg";
import maca02 from "../Picture/maca/macabox1.jpg";
import maca03 from "../Picture/maca/macabox3.jpg";

import stone01 from "../Picture/stone/stone1.jpg";
import stone03 from "../Picture/stone/stone3.jpg";

import beef01 from "../Picture/beef/beef01.jpg";
import beef03 from "../Picture/beef/beef03.jpg";

import rown05 from "../Picture/rown/rown05.jpg";
import Image from "next/image";

function ProductCardI() {
  const products = [
    {
      name: "頂級養身雙強禮盒 牛樟芝+褐藻膠",
      price: "$15,999",
      image: rown05,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "頂級牛樟芝滴粒 一盒入",
      price: "$8500",
      image: beef01,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "頂級牛樟芝滴粒 三盒入",
      price: "$22,990",
      image: beef03,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "特惠石斛瑪卡禮盒",
      price: "$4999",
      image: maca01,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "瑪卡滴粒萃取 一盒入",
      price: "$2600",
      image: maca02,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "瑪卡滴粒萃取 三盒入",
      price: "$7499",
      image: maca03,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "石斛抗藍光明亮滴粒 一盒入",
      price: "$2600",
      image: stone01,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
    {
      name: "石斛抗藍光明亮滴粒 三盒入",
      price: "$7499",
      image: stone03,
      link: "https://www.pcstore.com.tw/biofinacoonline/HM/search.htm",
    },
  ];

  return (
    <div className="w-full h-full grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto ">
      {products.map((product, i) => (
        <div
          key={i}
          className=" flex flex-col m-5 bg-white z-30 p-10 shadow-lg hover:scale-105 transform transition duration-500 "
        >
          <a href={product.link}>
            <Image
              src={product.image}
              height={300}
              width={300}
              className="object-contain"
              alt={product.image}
            />

            <h4 className="my-3">{product.name}</h4>

            <div className="flex mb-5 items-center">
              <p className="font-bold ">{product.price}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductCardI;
