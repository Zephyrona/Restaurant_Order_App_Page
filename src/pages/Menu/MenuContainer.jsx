import { Tabs } from "@material-tailwind/react";
import TabsComp from "../../components/Tabs/Tabs"; 
export default function MenuContainer() {
  return (
    <div className="px-[5px] md:px-[30px]">
      <Tabs value="mainmeals">
        <TabsComp />
      </Tabs>
    </div>
  );
}
