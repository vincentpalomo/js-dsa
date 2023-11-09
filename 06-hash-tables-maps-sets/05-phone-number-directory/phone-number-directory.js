function phoneNumberDirectory(phoneNumbers) {
  // Create a new Map called directory
  // Iterate through the phoneNumbers array using a for...of loop
  // Use the split() method to separate the name and phone number from each entry using the colon : as the separator
  // Set each name as the key and its corresponding phone number as the value in the Map
  // Return the directory, which now contains the phone number directory

  const directory = new Map();

  for (const entry of phoneNumbers) {
    const [name, number] = entry.split(':');
    directory.set(name, number);
  }

  return directory;
}

module.exports = phoneNumberDirectory;
