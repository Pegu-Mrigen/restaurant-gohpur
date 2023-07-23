import { menu } from "@/data";
import React from "react";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-2 lg:px-18 xl:px-36 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem) ] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/category.slug`}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})` }}
          className="w-full h-1/3 bg-cover p-6"
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-xl">{category.title}</h1>
            <p className="text-sm md:text-xs lg:text-sm my-4">{category.desc}</p>
            <button className={`hidden 2xl:block`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
