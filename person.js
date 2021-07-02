const persons = [
  {
    userID: 2,
    name: "Godia",
    password: "99383",
    email: "godi@gmail.com",
  },
  {
    userID: 1,
    name: "Tola",
    password: "13345",
    email: "tolani@gmail.com",
  },
  {
    userID: 3,
    name: "bilis",
    password: "14345",
    email: "majo@gmail.com",
  },
  {
    userID: 4,
    name: "nedu",
    password: "82345",
    email: "ned@gmail.com",
  },
];

class Person {
  constructor(userID) {
    this.userID = userID;
  }

  static Createperson(name, password, email, userId) {
    persons.push({ name, password, email, userId });
    return persons;
  }

  async getName() {
    try {
      let username = await persons[this.userID];
      if (!username) {
        return "error, No User with this ID";
      }
      return username;
    } catch (error) {
      return error;
    }
  }

  async getPersons() {
    return persons;
  }
}

module.exports = Person;
