import { createContext } from "react";
import { useState } from "react";

export const ProfilesContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  return (
    <ProfilesContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfileProvider;
