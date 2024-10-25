import { TBike } from "@/types";
import NoBikePhoto from "@/assets/bike_photo_placeholder.svg";
import { Link } from "react-router-dom";
import { bikesRoute } from "@/routes/routes";
import Title from "./Title";
export default function Bike({
  large_img,
  title,
  serial,
  frame_colors,
  id,
  stolen_location,
  description,
  year,
}: TBike) {
  const imgClasses = "w-full h-52 md:w-44 md:h-44 lg:w-60 lg:h-60 bg-gray-200";
  return (
    <div>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center">
        <div className={imgClasses}>
          <img
            className={`w-full h-full ${!large_img && "py-5"}`}
            src={large_img ? large_img : NoBikePhoto}
            alt={title}
          />
        </div>
        <div className="md:mx-6 p-5 md:p-0 lg:mx-10 xl:mx-16 flex flex-col md:flex-row justify-start text-slate-700 items-start gap-3 md:gap-6 lg:gap-10">
          <div className="flex font-semibold flex-col gap-2 md:gap-3">
            <Link
              to={`${bikesRoute}/${id}`}
              className="text-md lg:text-lg text-sky-700"
            >
              {title}
            </Link>
            <Title title="Serial: " value={serial} />
            <Title title="Primary colors: " value={frame_colors} />
          </div>
          <div className="flex flex-col gap-3">
            {year && <Title title="stolen date: " value={`${year}`} />}
            <Title title="Location: " value={stolen_location} />
            <Title title="Description: " value={description} />
          </div>
        </div>
      </div>
    </div>
  );
}
