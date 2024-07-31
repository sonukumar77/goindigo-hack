import { ListItem } from "@/models/List";

interface Props {
  asideList: ListItem[];
  currentIndex: number;
  handleItemClick: (index: number) => void;
}

const Aside = ({ asideList, currentIndex, handleItemClick }: Props) => {
  return (
    <aside className="bg-slate-200 w-1/5 ">
      <ul className="">
        {asideList.map((item, index) => (
          <li
            key={`list${item.id}`}
            onClick={() => handleItemClick(index)}
            className={`p-4 cursor-pointer ${
              currentIndex === index ? "bg-yellow-400" : ""
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
