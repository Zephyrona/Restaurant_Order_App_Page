import Slide from "../Campaign/Slider";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="container flex flex-col gap-[30px] pb-[30px]">
      <Slide />
      <Menu />
      <Contact />
      <Typography className="text-center font-bold text-lg ">
        © 2021 All rights reserved by Zephyrona
      </Typography>
    </div>
  );
}
