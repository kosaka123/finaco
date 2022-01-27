import axios from "axios";
import { useEffect, useRef, useState } from "react";
import FacebookProvider, { EmbeddedPost, Page } from "react-facebook-sdk";

function FacebookData() {
  const [facebookData, setFacebookData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios(
  //       "https://graph.facebook.com/112921391180834/feed?fields=full_picture,message,from,permalink_url&access_token=EAAJKxCkRqeABADMGJLus5B9UZCQCUengSwhE7Kuabcby2Largu8gOsbK89in0vs0GBRQvucbt85k5Nc3nOz7ZCp8XqHhpRzrwTspmJgqID6oDLZCkaBHZAw0NvI3ULACIjnabJJWZBmRmltY4xZCKsoCsOvlBuTZCYE1io0gfBdxlTLxnQfsbQ2",
  //     );
  //     setFacebookData(response.data);
  //     setLoading(true);
  //   };
  //   getData();
  // }, []);

  // console.log("fb", facebookData);

  return (
    <div className="w-full lg:mx-auto lg:w-1/2 h-[500px] flex justify-center mt-10">
      <div className="sm:w-full w-2/3 flex justify-center border-8 border-gray-200 rounded-xl shadow-xl">
        <div className="flex justify-center w-full h-full bg-black overflow-y-hidden">
          <FacebookProvider appId="645156316490208">
            <Page
              href="https://www.facebook.com/%E5%81%A5%E5%BA%B7%E6%A8%BA%E9%BD%A1%E9%A3%9F-106507334743962"
              tabs="timeline"
              width="1000"
              height="500"
            ></Page>
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
}

export default FacebookData;
