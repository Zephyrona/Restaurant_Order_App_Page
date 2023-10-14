/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardContainer from "../Card/CardContainer";

export default function TabsComp({ data }) {
  const [activeTab, setActiveTab] = useState("mainmeals");

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsHeader className="flex flex-col sm:flex-row">
        {data.map(({ name, description }) => (
          <Tab
            key={description}
            value={description}
            onClick={() => setActiveTab(description)}
            className={
              activeTab === description
                ? "text-gray-900 text-sm md:text-lg "
                : ""
            }
          >
            {name}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map((item) => (
          <TabPanel key={item.id} value={item.description}>
            <CardContainer products={item.products} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
