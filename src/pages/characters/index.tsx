import { CharacterType } from "@/types";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Character: NextPage = () => {
  const [character, setCharacter] = useState<CharacterType[]>();
  const [error, setError] = useState<{error: string}>()

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        if (data?.results) {
          setCharacter(data.results)
        } else {
          setError(data)
        }
        
      })
  }, []);

  if (error?.error) {
    return (
      <h1>{error.error}</h1>
    )
  }
  console.log({ character });

  return (
    <div>
      <h1>Character Page</h1>
      <div>
        {character?.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Character;
