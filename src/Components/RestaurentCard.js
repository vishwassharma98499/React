import { CDN_URL } from "../utils/constants";

const RestaurentCardLiferando = (props) => {
  const { resData } = props;
  // console.log(`id: ${id}`);
  // console.log(`data: ${resData}`);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="reslogo"
        src={resData.brand.heroImageUrl}
      />
      <h3 className="font-bold py-4 text/lg">{resData.brand.name}</h3>
      <h4 className="f">{resData.cuisineTypes.join(", ")}</h4>
      <h4>{resData.rating.score}</h4>
      <h4>{resData.shippingInfo.delivery.duration}</h4>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// higher order component
export const WithPromotedLabel = (RestaurentCard) => {
  // props is default input and we are providing same input in output as  {...props}
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
