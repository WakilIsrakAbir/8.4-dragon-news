import React from "react";

async function getCatagory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getCatagory();
  // console.log(catagories.news_category);

  return (
    <div className="max-w-10/12 mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <h2 className="font-bold text-2xl text-center ">Categories</h2>
        <ul className="flex flex-col gap-3 mt-3">
          {catagories.news_category.map((catagory) => {
            return <li key={catagory.category_id} className="bg-slate-100 p-2 rounded-xl font-semibold text-center text-md">{catagory.category_name}</li>;
          })}
        </ul>
      </div>
      <div className="font-bold text-2xl bg-purple-100 text-center col-span-6">
        All News
      </div>
      <div className="font-bold text-2xl bg-yellow-100 text-center col-span-3">
        Social Icons
      </div>
    </div>
  );
}
