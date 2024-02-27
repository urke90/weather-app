export const getServerErrorMessage = (statusCode?: number) => {
  if (!statusCode) return 'Ooops... Something went wrong!';

  const serverErrorCodes = [500, 502, 503, 504];

  if (serverErrorCodes.includes(statusCode)) {
    return 'Server error. Please try again later!';
  }

  switch (statusCode) {
    case 401:
      return 'Something went wrong! Please contact the administrator!';
    case 404:
      return 'Bad Request. Please check the name of the city you have entered!';
    case 429:
      return 'You have exceeded the maximum number of requests. Please try again later!';
    default:
      return 'Ooops... Something went wrong!';
  }
};
