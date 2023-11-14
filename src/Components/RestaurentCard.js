// Props: properties or pass argument to component
const RestaurentCard = (props) => {
  const { resData } = props;
  const id = resData.id;
  // console.log(`id: ${id}`);
  // console.log(`data: ${resData}`);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="reslogo"
        src={resData.brand.heroImageUrl}
      />
      <h3>{resData.brand.name}</h3>
      <h4>{resData.cuisineTypes.join(", ")}</h4>
      <h4>{resData.rating.score}</h4>
      <h4>{resData.shippingInfo.delivery.duration}</h4>
    </div>
  );
};

export default RestaurentCard;
