const getFirstLetters = (fullname) => {
  const [fName, lName] = fullname.split(" ");
  return fName.toUpperCase().charAt(0) + lName.toUpperCase().charAt(0);
};

export default getFirstLetters;
