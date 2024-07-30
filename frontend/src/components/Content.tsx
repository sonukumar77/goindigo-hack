import { ListItem } from "@/models/List";

interface Props {
  asideList: ListItem[];
  currentIndex: number;
}

const Content = ({ asideList, currentIndex }: Props) => {
  return (
    <main className="w-4/5 shadow-sm shadow-black bg-white">
      {asideList[currentIndex].component}
    </main>
  );
};

export default Content;
