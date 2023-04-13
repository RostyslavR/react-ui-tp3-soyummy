export const getTimeDisplay = time => {
  if (time < 60) {
    return `${time} min`;
  } else {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    if (minutes !== 0) {
      return `${hours} h ${minutes} min`;
    } else {
      return `${hours} h `;
    }
  }
};
