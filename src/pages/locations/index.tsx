import { LocationType } from "@/types";
import { NextPage } from "next";

const Locations: NextPage<{ locations: {results: LocationType[]} }> = ({ locations }) => {
  return (
    <div>
      <h1>Locations Page</h1>
      <div>
        {locations.results.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Locations;

export const getServerSideProps = async () => {
  const locations = await fetch(
    "https://rickandmortyapi.com/api/locati"
  ).then((response) => response.json());

  console.log({locations: locations.results});
  
  return {
    props: { locations },
  };
};
