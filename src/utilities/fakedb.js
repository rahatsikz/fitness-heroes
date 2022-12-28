const addToDb = (time, text) => {
  let breakTimeKeeper = {};
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTimeKeeper = JSON.parse(storedTime);
  }
  breakTimeKeeper[time] = text;
  localStorage.setItem("break-time", JSON.stringify(breakTimeKeeper));
};
const getFromdb = (time) => {
  let breakTimeKeeper = {};

  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTimeKeeper = JSON.parse(storedTime);
  }
  return breakTimeKeeper[time];
};
const addClassActive = (element, status) => {
  let clickStatus = {};
  const storedClass = localStorage.getItem("element-status");
  if (storedClass) {
    clickStatus = JSON.parse(storedClass);
  }
  clickStatus[element] = status;
  localStorage.setItem("element-status", JSON.stringify(clickStatus));
};

const getClassActive = (element) => {
  let clickStatus = {};
  const storedClass = localStorage.getItem("element-status");
  if (storedClass) {
    clickStatus = JSON.parse(storedClass);
  }
  return clickStatus[element];
};

export { addToDb, getFromdb, addClassActive, getClassActive };
