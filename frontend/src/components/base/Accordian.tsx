import { ReactNode, useState } from "react";

interface Props {
  header: ReactNode;
  children: ReactNode;
  containerClass?: string;
  contentClass?: string;
}

const Accordian = ({
  header,
  containerClass,
  contentClass,
  children,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleAccordian = () => {
    setVisible((prev) => !prev);
  };

  const toggleClass = visible
    ? "max-h-fit overflow-visible"
    : "max-h-0 overflow-hidden";

  return (
    <div
      className={`mt-2 bg-white p-4 max-w-screen-lg mx-auto shadow-sm shadow-gray-950/50 ${containerClass}`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer ${contentClass}`}
        onClick={toggleAccordian}
      >
        {header}
        <span>{visible ? "-" : "+"}</span>
      </div>
      <div className={toggleClass}>{children}</div>
    </div>
  );
};

export default Accordian;
