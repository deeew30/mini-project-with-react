import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);


export default function UserContextProvider({ children }) {
  const defaultUser = {
    userid: "-1",
    name: "None",
    BG: "None",
    DOB: "None",
    email: "None",
    password: "None",
    contact: "None",   
    type: "None",
  };

  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext Must be used within a UserContext Provider"
    );
  }
  return context;
}
