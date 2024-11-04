function calculateAge(birthdate) {
  const date = new Date();

  const differenceDate = Math.floor(
    (date.getTime() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365.25,
  );

  if (differenceDate <= 0) return 0;
  else return differenceDate;
}

function daysUntilBirthday(birthdate) {
  const date = new Date();
  date.setFullYear(birthdate.getFullYear());

  const differenceDate = Math.floor((birthdate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

  const nextYear = new Date();
  let num = 11 - nextYear.getMonth();
  nextYear.setMonth(nextYear.getMonth() + num + 1);
  nextYear.setDate(0);

  const differenceYear = Math.floor((nextYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

  if (differenceDate === 0) return 0;
  else if (differenceDate > differenceYear) return 0;
  else if (differenceDate === -1) return 365;
  else return differenceDate;
}

module.exports = {
  calculateAge,
  daysUntilBirthday,
};
