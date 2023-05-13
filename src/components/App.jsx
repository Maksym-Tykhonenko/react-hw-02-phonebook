import { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

  componentDidMount() {
    console.log('DidMount')
    
    //const localStorageContacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(localStorage.getItem('contacts'))
    
    if (parsContacts) {
      console.log('виполн if')
      this.setState({ contacts: parsContacts })
    };
    
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate')
    console.log(prevState)
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
    

  };

  handleAddContact = (newContact) => {
    
    !this.state.contacts.find(contact => contact.name === newContact.name) ?
      this.setState(({ contacts }) => {
      
      return {
        contacts: [...contacts, newContact]
      }
      }) : Notify.warning(`Contact ${newContact.name} added`,
        {
          width: '460px',})
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
    const filtredContacts = this.writeToFilter();
    const {contacts, filter} = this.state;

    return (
      <div>
        <Section title='Phonebook'>
          <Form handleAddContact={this.handleAddContact} />
        </Section>

        {contacts.length > 0 && <Section title='Contacts:'>
          <Filter searchContact={this.handleWriteToFilter} />

          {filter === '' ?
            <Contacts
              contacts={contacts}
              delContact={this.delContact} />
            : <FiltredContactList
              filtredContacts={filtredContacts}
              delContact={this.delContact} />}
        
        </Section>}
      </div>
    );
    
  };
};

