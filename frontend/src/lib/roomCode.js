/**
 * Derive a 4-character room code from a MongoDB sessionId
 * Takes the last 4 characters of the ID and reverses them
 * @param {string} sessionId - The MongoDB session ID
 * @returns {string} - A 4-character room code
 */
export function deriveRoomCode(sessionId) {
  if (!sessionId || sessionId.length < 4) {
    return "0000";
  }
  
  // Get last 4 characters and reverse them
  const lastFour = sessionId.slice(-4);
  return lastFour.split("").reverse().join("").toUpperCase();
}

/**
 * Validate the entered room code against the session ID
 * @param {string} sessionId - The MongoDB session ID
 * @param {string} enteredCode - The code entered by the user
 * @returns {boolean} - Whether the code is valid
 */
export function validateRoomCode(sessionId, enteredCode) {
  const expectedCode = deriveRoomCode(sessionId);
  return expectedCode === (enteredCode || "").toUpperCase().trim();
}
