import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  //console.log(err);
  return (
    <div className="Error">
      <h1>Error page</h1>
      <h2> this is error page</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
