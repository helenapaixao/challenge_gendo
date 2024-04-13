import { ReactNode } from "react";

type TabProps = {
  label: string;
  children?: ReactNode;
  number?: number;
};

export const Tab = ({ children, number }: TabProps) => {
  return (
    <div>
      {children}
      {number}
    </div>
  );
};

export default Tab;
