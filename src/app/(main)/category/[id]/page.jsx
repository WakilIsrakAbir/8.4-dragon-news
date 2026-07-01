import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCatagory, getNewsByCatagoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const categories = await getCatagory();
  // console.log(catagories.news_category);

  const news = await getNewsByCatagoryId(id);
  // console.log(news);

  return (
    <div className="max-w-10/12 mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      <div className="bg-purple-100 text-center col-span-6">
        <h2 className="font-bold text-2xl">All News</h2>
        {news.length > 0 ? news.map((n) => (
          <div key={n._id} className="p-6 border rounded-md mb-2">
            {n.title}
          </div>
        )): <h2>No News Found</h2> }
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
