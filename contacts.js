// Зроби імпорт модулів fs і path для роботи з файловою системою
const fs = require("fs").promises;
const path = require("path").promises;

// Приклад з конспекту
fs.readFile("./db/contacts.json")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message));

// Альтернатива
const fileOperation = async () => {
  const buffer = await fs.readFile("./db/contacts.json", "utf-8");
  //   const text = buffer.toString();
};

fileOperation();

/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
