const contactsOperations = require("./contacts.js");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsOperations.listContacts();
      return console.table(allContacts);

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id}, not found`);
      }
      return console.log(contact);

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      return console.log(newContact);
    // не має в домашці
    // case "updateById":
    //   const updateContact = await contactsOperations.updateById(id, {
    //     name,
    //     email,
    //     phone,
    //   });
    //   return console.log(updateContact);
    // не має в домашці
    case "remove":
      const deleteContact = await contactsOperations.removeContact(id);
      if (!deleteContact) {
        throw new Error(`Contact with id=${id}, not found`);
      }
      return console.log(deleteContact);
    default:
      return console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
