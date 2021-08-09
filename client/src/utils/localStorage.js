export const getSavedParkCodes = () => {
  const savedParkCodes = localStorage.getItem("saved_parks")
    ? JSON.parse(localStorage.getItem("saved_parks"))
    : [];

  return savedParkCodes;
};

export const saveParkCodes = (parkCodeArr) => {
  if (parkCodeArr.length) {
    localStorage.setItem("saved_parks", JSON.stringify(parkCodeArr));
  } else {
    localStorage.removeItem("saved_parks");
  }
};

export const removeParkCodes = (parkCode) => {
  const savedParkCodes = localStorage.getItem("saved_parks")
    ? JSON.parse(localStorage.getItem("saved_parks"))
    : null;

  if (!savedParkCodes) {
    return false;
  }

  const updatedSavedParkCodes = savedParkCodes?.filter(
    (savedParkCodes) => savedParkCodes !== parkCode
  );
  localStorage.setItem("saved_parks", JSON.stringify(updatedSavedParkCodes));

  return true;
};
