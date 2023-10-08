import CardSpecial from "./CardSpecial";
import SpecialMenu from "../../db/SpecialMenu";

export default function CardSpecialContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
      {SpecialMenu.map((item) => (
        <CardSpecial
          key={item.id}
          label={item.label}
          img={item.img}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}
