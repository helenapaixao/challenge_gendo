import { ReactNode } from "react";

type TabProps = {
  label: string;
  children?: ReactNode;
  number?: number;
};

export const Tab = ({ children }: TabProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Tab;
