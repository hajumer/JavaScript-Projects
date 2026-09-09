// Create a function to mask the username part of an email
function maskEmail(email) {
  // Find the position of the @ symbol
  const atIndex = email.indexOf("@");
  // Get the username before the @ symbol
  const username = email.slice(0, atIndex);
  // Get the domain including the @ symbol
  const domain = email.slice(atIndex);
  // Store the first and last character of the username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  // Replace the middle characters with asterisks
  const maskedPart = "*".repeat(username.length - 2);
  // Return the masked email address
  return firstChar + maskedPart + lastChar + domain;
}
// Store an email address
const email = "applepie@example.com";
// Display the masked email in the console
console.log(maskEmail(email));
