import { ReactNode } from "react";

interface Props {
  title: string;
  containerStyle?: string;
  titleStyle?: string;
  children?: ReactNode;
}
const Subtitle = ({ title, containerStyle, titleStyle, children }: Props) => {
  return (
    <div className={`bg-black text-white p-4 ${containerStyle}`}>
      <div className={`text-lg ${titleStyle}`}>{title}</div>
      {children}
    </div>
  );
};

export default Subtitle;
