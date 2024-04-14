import React, { useState, ReactNode } from "react";
import { NumberTabs, TabButton, TabContent, TabsContainer } from "./styles";



export type TabsProps = {
  children: ReactNode;
  onTabClick?: (index: number) => void;
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabsContainer>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.props.label) {
            const isActive = index === activeTab;
            return (
              <TabButton
                key={index}
                onClick={() => handleTabClick(index)}
                active={isActive}
              >
                <TabContent>
                  {child.props.label}
                  <NumberTabs>{child.props.number}</NumberTabs>
                </TabContent>
              </TabButton>
            );
          }
          return null;
        })}
      </TabsContainer>
      {React.Children.toArray(children)[activeTab]}
    </div>
  );
};

export default Tabs;
