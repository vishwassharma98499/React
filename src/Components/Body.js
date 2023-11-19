import RestaurentCard from "./RestaurentCard";
import resObjList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //Object.keys(resObjList).map((resObjKey) => {
  //console.log(resObjList[resObjKey]);
  // });
  //debugger;
  //{resObjList.map((restaurants) => (
  // <RestaurentCard key = {restaurent.data.id} resData={restaurants} />
  //{restaurent.data.id}  is required so if new card come react will no what to render else it will render all the cards
  // react official document says index should not be used as keys as order might change¸
  //))}

  // first is method and second is the data
  // if no dependecy it called every time object renders, if there is dependency it is called everytime dependency changes
  useEffect(() => {
    try{
      fetchData();
    } catch(ex){
      console.log(ex)
    }
    
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();
    // // Optional Chaining
    // setListOfRestraunt(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRestaurant(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    //console.log(json);
  };
  // state variable(react variable)
  const [listOfRestaurents, setListOfRestaurents] = useState(resObjList);
  const [filteredRestaurent, setfilteredRestaurent] = useState(resObjList);
  const [searchText, setSearchText] = useState("");
  // conditional rendering

  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            id="search-id"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let finalList = {};
              let resDataStr;
              Object.keys(listOfRestaurents).map((resObjKey) => {
                resDataStr = listOfRestaurents[resObjKey];
                let property = { [resObjKey]: {} };
                if (
                  resDataStr.brand.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                ) {
                  property[resObjKey] = resDataStr;
                  finalList = { ...finalList, ...property };
                }
              });
              setfilteredRestaurent(finalList);
              console.log(searchText);
              //filter restaurent card and update gui
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            {
              let finalList = {};
              let resDataStr;
              Object.keys(listOfRestaurents).map((resObjKey) => {
                resDataStr = listOfRestaurents[resObjKey];
                let property = { [resObjKey]: {} };
                if (resDataStr.rating.score > 4.5) {
                  // resDataStr[resObjKey] = resDataStr
                  property[resObjKey] = resDataStr;
                  finalList = { ...finalList, ...property };
                }
              });

              setfilteredRestaurent(finalList);
              //console.log(`all: ${JSON.stringify(listOfRestaurents)}`);
              //console.log(`updated: ${JSON.stringify(finalList)}`);

              // Object.keys(resObjList).map((resObjKey) => {
              //   let resDataStr = resObjList[resObjKey];
              //   resObjList = resDataStr.filter(
              //     (res) => res.data.rating.score > 4
              //   );
              //   console.log(reslist);
              // });
            }
          }}
        >
          Top rated restaurents
        </button>
      </div>
      <div className="res-container">
        {Object.keys(filteredRestaurent).map((resObjKey) => {
          let resDataStr = listOfRestaurents[resObjKey];
          return <RestaurentCard key={resObjKey} resData={resDataStr} />;
        })}
      </div>
    </div>
  );
};

export default Body;
