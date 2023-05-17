const getAllProfiles = async () => {
  const profilesResponse = await fetch(
    "http://192.168.43.71:3000/profiles/all"
  );

  const profilesJSON = await profilesResponse.json();
  console.log("RESPONSE", profilesJSON);
  return profilesJSON;
};

export default getAllProfiles;
