import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const data = useLoaderData();
  const breakingNews = data.filter((item) => item.category_id === 2).slice(0, 3);

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Breaking News</p>

      <Marquee pauseOnHover={true} speed={60} className="flex gap-10">
        {breakingNews.length > 0 ? (
          breakingNews.map((item) => (
            <p key={item.id} className="font-bold mr-10">
              {item.title}
            </p>
          ))
        ) : (
          <p className="font-bold">No breaking news found...</p>
        )}
      </Marquee>
    </div>
  );
};

export default LatestNews;
