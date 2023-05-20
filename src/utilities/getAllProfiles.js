const getAllProfiles = async () => {
  const profilesResponse = await fetch(
    'https://sidekick-e028.onrender.com/profiles/all',
  );

  const profilesJSON = await profilesResponse.json();
  console.log('RESPONSE', profilesJSON);
  return profilesJSON;
};

export default getAllProfiles;
