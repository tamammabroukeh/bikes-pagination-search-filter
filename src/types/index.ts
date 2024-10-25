export type THeading = {
  title: string;
};

export type TBikesResponse = {
  bikes: TBike[];
};

export type TBike = {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: string;
  manufacturer_name: string;
  external_id: string | number;
  registry_name: string;
  registry_url: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: string | number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
};
