import { createContext } from "react";
import { useState } from "react";

export const SaveProfilesContext = createContext();

const SaveProfileProvider = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState([]);
  return (
    <SaveProfilesContext.Provider value={{ savedProfiles, setSavedProfiles }}>
      {children}
    </SaveProfilesContext.Provider>
  );
};

export default SaveProfileProvider;
