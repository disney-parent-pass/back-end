enum StatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  MISSING_CREDENTIAL = 401,
  NOT_FOUND = 404,
  USERNAME_TAKEN = 409,
  SERVER_ERROR = 500,
}

export default StatusCodes;
