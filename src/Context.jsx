// import Dexie from "dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import React, {
  useState,
  createContext,
  useContext,

} from "react";



export const Context = createContext();

export const GlobalContext = ({ children }) => {

const [page,set_page]=useState("")
  const store = {
 
    page,
    set_page
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const UseGlobalContext = () => useContext(Context);
