import { useState } from "react";
import AccordianListing from "./AccordianListing";
import Admin from "./Admin";
import Aside from "./Aside";
import Content from "./Content";
import { BRAND_NAME } from "@/constants/data";

const asideList = [
  {
    id: "1",
    title: "Home",
    component: <AccordianListing />,
  },
  {
    id: "2",
    title: "Admin",
    component: <Admin />,
  },
];


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <header className="bg-black text-white text-2xl p-4">{BRAND_NAME}</header>
      <div className="w-full h-[90%] min-h-screen flex">
        <Aside
          asideList={asideList}
          currentIndex={currentIndex}
          handleItemClick={handleItemClick}
        />
        <Content asideList={asideList} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default App;
