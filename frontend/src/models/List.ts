import { ReactNode } from "react";

export interface ListItem {
  id: string;
  title: string;
  component: ReactNode;
}
