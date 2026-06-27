import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      title: "Bangladesh Launches New Digital Education Initiative",
    },
    {
      id: 2,
      title: "AI Technology Continues to Transform Global Industries",
    },
    {
      id: 3,
      title: "Scientists Discover Promising Renewable Energy Solution",
    },
    {
      id: 4,
      title: "National Cricket Team Secures Historic Series Victory",
    },
  ];

  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 p-2 max-w-10/12 mx-auto rounded-2xl mt-4">
      <button className="btn bg-pink-500 text-white rounded-2xl">
        Leatest News
      </button>
      <Marquee pauseOnHover={true} className="cursor-pointer">
        {
          news.map((item) => {
            return <p className="mx-4" key={item.id}>{item.title}</p>
          })
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
