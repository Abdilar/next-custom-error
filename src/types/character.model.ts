type Label = {
  name: string;
  url: string;
};

export type CharacterType = {
  created: string;
  episode: string[];
  gender: "Male" | "Female";
  id: number;
  image: string;
  location: Label;
  name: string;
  origin: Label;
  species: string;
  status: string;
  type: string;
  url: string;
};
