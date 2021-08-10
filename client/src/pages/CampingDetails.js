import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAlerts, getCampgroundsById, getParkByCode } from "../utils/api";

export default function CampgroundDetails(props) {
  const params = useParams();
  const [campground, setCampground] = useState({});
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    console.log(params)
    // retrieve details about our specific park
    getCampgroundsById(params.id).then(({ data }) => setCampground(data[0]));
    // retrieving the alerts for our specific park
    getAlerts(params.id).then(({ data }) => setAlerts(data));
  }, []);

  if (!campground) {
    return <h1>Loading Campground Data....</h1>;
  }

  return (
    <>
      <h1>{campground.name}</h1>
      <p>{campground.description}</p>
      <div className="parkFormat">
      <img
          className="parkImg"
        src={
          campground.images
            ? campground.images[0].url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        alt={campground.images ? campground.images[0].altText : "no image"}
      />
      </div>
    </>
  );
}
