/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CardSpecial({ label, img, price, description }) {
  return (
    <Card className=" h-full w-full">
      <CardHeader shadow={false} floated={false} className="h-[250px] ">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium">{label}</Typography>
          <Typography className="font-medium">{price}</Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
