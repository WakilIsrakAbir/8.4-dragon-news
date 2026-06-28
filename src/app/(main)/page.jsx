import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import React from "react";

async function getCatagory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCatagory();
  // console.log(catagories.news_category);

  return (
    <div className="max-w-10/12 mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
      </div>

      <div className="bg-purple-100 text-center col-span-6">
        <h2 className="font-bold text-2xl">All News</h2>
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
