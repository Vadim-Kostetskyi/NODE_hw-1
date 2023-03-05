// import * from './db/contacts.json'
const contacts = require("./contacts");
const argv = require("yargs").argv;

// contacts.addContact("Chaim Lewis", "dui.in@egetlacus.ca", "(294) 840-6685");

// index.js

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contacts.getContactById(id);
      break;

    case "add":
      contacts.addContact(name, email, phone);
      break;

    case "remove":
      contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
