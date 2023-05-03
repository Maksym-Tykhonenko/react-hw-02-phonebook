import { Component } from "react";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { FiltredContactList } from "./FiltredContactList/FiltredContactList";
import { Section } from "./Section/Section";



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = (newContact) => {
    
    !this.state.contacts.find(contact => contact.name === newContact.name) ?
      this.setState(({ contacts }) => {
      
      return {
        contacts: [...contacts, newContact]
      }
    }) : alert(`Contact ${newContact.name} added`)
  };

  handleWriteToFilter = (contact) => {
    this.setState({
      filter: contact
    });
   this.writeToFilter()
  };

  writeToFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterNane = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilterNane))
  };

  delContact = (contId) => {
    console.log(`Contact ${contId} deleted`)

    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== contId),
      };
    });
  };

  render() {
    const filtredContacts = this.writeToFilter()

    return (
      <div>
        <Section title='Phonebook'>
          <Form handleAddContact={this.handleAddContact} />
        </Section>
        {this.state.contacts.length > 0 &&  <Section title='Contacts:'>
          <Filter searchContact={this.handleWriteToFilter} />
          {this.state.filter === '' ?
            <Contacts
              contacts={this.state.contacts}
              delContact={this.delContact } />
            : <FiltredContactList
                filtredContacts={filtredContacts}
                delContact={this.delContact } />}
        
        </Section>}
       
        
      </div>
    );
    
  }
};
//