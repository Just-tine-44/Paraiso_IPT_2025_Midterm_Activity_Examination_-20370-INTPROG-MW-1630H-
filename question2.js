/**
 * Function to reverse a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"