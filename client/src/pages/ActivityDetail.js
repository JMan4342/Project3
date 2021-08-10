import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getThingsToDoByCode } from "../utils/api";

export default function ThingsToDoDetail(props) {
  const params = useParams();
  const [thingsToDo, setThingsToDo] = useState({});
  console.log(params)
  useEffect(() => {
    getThingsToDoByCode(params.id).then(({ data }) => setThingsToDo(data[0]));
  });

  if (!thingsToDo) {
    return <h1>Nothing was found</h1>;
  }
  return (
    <>
      <h1>{thingsToDo.title}</h1>
      <p>{thingsToDo.longDescription}</p>

      <img
        src={
            thingsToDo.images
            ? thingsToDo.images[0].url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        alt={thingsToDo.images ? thingsToDo.images[0].altText : "no image"}
      />
    </>
  );
}
