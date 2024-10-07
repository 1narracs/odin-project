const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return oldestAge > currentAge ? oldestPerson : currentPerson;
  });
};

const getAge = function (born, died) {
  if (!died) {
    died = new Date().getFullYear();
  }

  return died - born;
};

// Do not edit below this line
module.exports = findTheOldest;
