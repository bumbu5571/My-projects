function hasLeapDay() {
  const today = new Date();
  const currentYear = today.getFullYear();

  for (let year = currentYear; year <= currentYear + 1; year++) {
    const leapDate = new Date(year, 1, 29);
    const timeDiff = leapDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff <= 365 && daysDiff >= 0) {
      return true;
    }
  }

  return false;
}

module.exports = hasLeapDay;
