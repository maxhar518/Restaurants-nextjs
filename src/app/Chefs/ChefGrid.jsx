import React from "react";
import Image from "next/image"

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", img: "/chef1.png" },
  { name: "Jorina Begum", role: "Chef", img: "/chef2.png" },
  { name: "M. Mohammad", role: "Chef", img: "/chef3.png" },
  { name: "Munna Kathy", role: "Chef", img: "/chef4.png" },
  { name: "Tahmina Rumi", role: "Cook", img: "/pic1.png" },
  { name: "Bisnu Devgon", role: "Chef", img: "/pic2.png" },
  { name: "Motin Molladst", role: "Chef", img: "/pic3.png" },
  { name: "William Rumi", role: "Chef", img: "/pic4.png" },
  { name: "Kets William Roy", role: "Chef", img: "/pic5.png" },
  { name: "Mahmud Kholil", role: "Chef", img: "/pic6.png" },
  { name: "Ataur Rahman", role: "Chef", img: "/pic7.png" },
  { name: "Monalisa Holly", role: "Chef", img: "/pic8.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${index === 0
              ? "border-4 border-transparent hover:border-purple-600"
              : "border-4 border-transparent hover:border-purple-600"
              }`}
          >
            <div className="reletive flex-1">
              <Image
                src={chef.img}
                alt="chef Img"
                width={400}
                height={60}
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;