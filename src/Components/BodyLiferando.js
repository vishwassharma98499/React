import RestaurentCard, { WithPromotedLabel } from "./RestaurentCard";
import resObjList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
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
    try {
      fetchData();
    } catch (ex) {
      console.log(ex);
    }
    // return ()=> { };
    // required to return  the code if page changes
  }, []);

  // state variable(react variable)
  const [listOfRestaurents, setListOfRestaurents] = useState(resObjList);
  const [filteredRestaurent, setfilteredRestaurent] = useState(resObjList);
  const [searchText, setSearchText] = useState("");
  // conditional rendering
  const RestaurentCardPromoted = WithPromotedLabel(RestaurentCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) return <h1>looks like you are offline</h1>;

  const fetchData = async () => {
    const buseSwiggy = true;
    if (false == buseSwiggy) {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      console.log(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      // // Optional Chaining
      setListOfRestaurents(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurent(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    //console.log(json);
  };

  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            id="search-id"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {Object.keys(filteredRestaurent).map((resObjKey) => {
          let resDataStr = listOfRestaurents[resObjKey];
          if (resDataStr.rating.score > 4.5)
            return (
              <RestaurentCardPromoted key={resObjKey} resData={resDataStr} />
            );
          else return <RestaurentCard key={resObjKey} resData={resDataStr} />;
        })}
      </div>
    </div>
  );
};

export default Body;
