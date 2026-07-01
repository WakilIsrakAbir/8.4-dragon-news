export async function getCatagory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.data;
}

export async function getNewsByCatagoryId(catagory_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catagory_id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.data;
}