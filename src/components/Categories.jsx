import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Categories = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  console.log(categoryNews);

  return (
    <div className="flex flex-col space-y-4 mt-4">
      {/* <div>This is the category page. Items: {categoryNews.length}</div> */}
      {
        categoryNews.map((news)=>
        <NewsCard key={news._id} news={news}/>
        )
      }
    </div>
  );
};

export default Categories;
