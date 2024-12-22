import { createContext } from "react";

export const MyMainContext = createContext();
const AuthProvider = ({ children }) => {
  // TODO WORK
  // TODO WORK
  // TODO WORK
  const data = {
    name: "Robiul",
  };
  return (
    <MyMainContext.Provider value={data}>{children}</MyMainContext.Provider>
  );
};

export default AuthProvider;
