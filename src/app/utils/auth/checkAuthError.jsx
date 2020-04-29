const checkAuthError = (data, gotAnError, successData) => {
  const { status, error } = data;
  if (status === 400 || status === 404) {
    return gotAnError;
  }
  return successData;
};

export default checkAuthError;
