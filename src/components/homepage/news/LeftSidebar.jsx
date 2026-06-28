import Link from 'next/link';
import React from 'react'

const LeftSidebar = ({categories, activeId}) => {
  return (
    <div>
        <h2 className="font-bold text-2xl text-center ">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-3">
          {categories.news_category.map((category) => {
            return <li key={category.category_id} className={` ${category.category_id === activeId && 'text-green-600 bg-green-200' } bg-slate-100 p-2 rounded-xl font-semibold text-center text-md`}>
              <Link className='block' href={`/catagory/${category.category_id}`}>{category.category_name}</Link>
              </li>;
          })}
        </ul>
    </div>
  )
}

export default LeftSidebar