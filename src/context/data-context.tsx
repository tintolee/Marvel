import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext({
  characters: [],
  getCharacter: (id: string): Record<string, any> => {
    return {};
  },
  getCharacters: (offset?: string) => {},
  currentOffset: 0,
  searchArray: (searchvalue: string) => {},
  showSideNav: false,
  setShowSideNav:(data:any) => {},
});

export function DataProvider({ children }: { children: JSX.Element }) {
  const [characters, setCharacters] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [showSideNav, setShowSideNav] = useState(false);

  const searchArray = (searchvalue:string) => {
    const searchArray = characters;
    let newArray = searchArray.filter(function (item: any) {
      return item.name.includes(searchvalue);
    });
    setCharacters(newArray);
  };

  const getCharacters = (offset?: any) => {
    setCurrentOffset(offset);
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?apikey=827430900c2fc1ef443a4d1cc4cf5d81&hash=27bd1767dd9a30fd8c9560b97c6fe1e3&offset=${
          offset || 0
        }`
      )
      .then((data) => {
        setCurrentOffset(data?.data.data.offset);
        setCharacters(data?.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacter = async (id: string) => {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${id}?apikey=827430900c2fc1ef443a4d1cc4cf5d81&hash=27bd1767dd9a30fd8c9560b97c6fe1e3`
    );
    return response.data?.data.results[0];
  };

  return (
    <DataContext.Provider
      value={{
        characters,
        getCharacter,
        getCharacters,
        currentOffset,
        searchArray,
        showSideNav,
        setShowSideNav
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
