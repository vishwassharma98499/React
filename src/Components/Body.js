import RestaurentCard from "./RestaurentCard";
import resObjList from "../utils/mockdata";
import { useState } from "react";

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

  // state variable(react variable)
  const [listOfRestaurents, setListOfRestaurents] = useState(resObjList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            {
              let finalList = {};
              setListOfRestaurents([]);
              Object.keys(listOfRestaurents).map((resObjKey) => {
                let resDataStr = listOfRestaurents[resObjKey];
                if (resDataStr.rating.score > 4) {
                  finalList = { ...finalList, ...resDataStr };
                }
              });

              setListOfRestaurents(finalList);

              console.log(listOfRestaurents);

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
        {Object.keys(listOfRestaurents).map((resObjKey) => {
          console.log(
            `resdata: ${JSON.stringify(listOfRestaurents[resObjKey])}`
          );
          let resDataStr = listOfRestaurents[resObjKey];
          return <RestaurentCard key={resObjKey} resData={resDataStr} />;
        })}
      </div>
    </div>
  );
};

export default Body;
