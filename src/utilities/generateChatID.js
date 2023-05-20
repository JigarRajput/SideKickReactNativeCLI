export const generateChatID = (id1, id2) => {
  const sortedIDs = [id1.toString(), id2.toString()].sort();
  const concatenatedString = sortedIDs.join('');
  let uniqueID = '';

  for (let i = 0; i < concatenatedString.length; i++) {
    const charCode = concatenatedString.charCodeAt(i);
    uniqueID += charCode.toString(16); // Convert to hexadecimal representation
  }

  return uniqueID;
};
