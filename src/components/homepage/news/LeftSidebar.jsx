import Link from 'next/link';
import React from 'react'

const LeftSidebar = ({categories, activeId}) => {
  return (
    <div>
        <h2 className="font-bold text-2xl text-center ">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-3">
          {categories.news_category.map((category) => {
            return <li key={category.category_id} className={`p-2 rounded-xl font-semibold text-center text-md ${category.category_id === activeId ? 'bg-purple-500 text-white' : 'bg-slate-100'}`}>
              <Link className='block' href={`/category/${category.category_id}`}>{category.category_name}</Link>
              </li>;
          })}
        </ul>
    </div>
  )
}

export default LeftSidebar