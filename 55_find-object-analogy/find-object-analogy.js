export const findObjectAnalogy = (arrOfObj, props) => {
  return arrOfObj.filter((obj) => {
    for (let key in props) {
      if (!obj.hasOwnProperty(key) || obj[key] !== props[key]) {
        return false;
      }
    }
    return true;
  });
};
