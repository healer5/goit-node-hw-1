// Крок 3
// Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функції для роботи з контактами.

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// Альтернатива для package.json - перевірити, що вірно
//     "start": "node server",
//     "start:dev": "npx nodemon server",
