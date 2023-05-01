import { Component } from "react";

import { Form } from "./Form/Form";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleAddContact = (newContact) => {
    this.setState(({contacts}) => {
      //console.log(prev);
      return {
        contacts: [...contacts, newContact]
      }
    });
  };

  render() {
    return (
    <div>
        <Form handleAddContact={ this.handleAddContact} />
        
        <p>Contacts :</p>
        
    </div>
    );
    
  }
};
