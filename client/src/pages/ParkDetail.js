import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAlerts, getParkByCode } from "../utils/api";

export default function ParkDetail(props) {
  const params = useParams();
  const [park, setPark] = useState({});
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    // retrieve details about our specific park
    getParkByCode(params.parkCode).then(({ data }) => setPark(data[0]));
    // retrieving the alerts for our specific park
    getAlerts(params.parkCode).then(({ data }) => setAlerts(data));
  }, []);

  if (!park) {
    return <h1>Loading Park Data....</h1>;
  }

  return (
    <>
      <h1>{park.fullName}</h1>
      <p>{park.description}</p>
      <div className="parkFormat">
        <img
          className="parkImg"
          src={
            park.images
              ? park.images[0].url
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          }
          alt={park.images ? park.images[0].altText : "no image"}
        />
      </div>
    </>
  );
}

//    {/* THIS IMAGE CONFLICTS WITH THE API IMG */}
// {/* <div
//       style={{
//         backgroundImage: `url(/img/hiking.jpg)`,
//         height: "80vh",
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat",
//       }}
//     > */}
