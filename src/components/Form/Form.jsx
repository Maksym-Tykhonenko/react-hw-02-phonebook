import { Component } from "react";
import { nanoid } from 'nanoid';

import {Btn, Input, Lable, ContactForm } from './Form.styled';

export class Form extends Component {
    state = {
        id: '',
        name: '',
        number: '',
    };

    handleInputChange = (e) => {
        //console.log(e.currentTarget.value);
        //console.log(e.currentTarget.name);
        const { name, value } = e.currentTarget;
        
        this.setState({
            [name]: value,
            id: nanoid(),
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

            this.props.handleAddContact(this.state);
            this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
            id: '',
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <>
                <ContactForm onSubmit={this.handleFormSubmit}>
                    <Lable>Name
                    <Input
                        onChange={this.handleInputChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        /></Lable>
                    <Lable>Number
                    <Input
                        onChange={this.handleInputChange}
                        type="tel"
                        value={number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    /></Lable>
                    <Btn type="submit">Add contact</Btn>
                </ContactForm>
            </>
        );
    };
};
//  