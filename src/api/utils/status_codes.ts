/**
 * An enum for status codes that will be used through out the
 * API. 
 * 
 * Prevents every file having duplicate named constants and 
 * ensures status codes are linked to the same descriptive meaning
 * 
 */
enum StatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  USERNAME_TAKEN = 409,
  SERVER_ERROR = 500,
}

export default StatusCodes;
