import { Component } from "react";
import { nanoid } from 'nanoid'

export class Form extends Component {
    state = {
        name: '',
        id: ''
    };

    handleInputName = (e) => {
        this.setState({
            name: e.target.value,
            id: nanoid(),
        });
        //console.log(this.state.name);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddContact(this.state)
    };


    render() {
        return (
            <>
                <form action="" onSubmit={this.handleFormSubmit}>
                    <input
                        onChange={this.handleInputName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <button type="submit">add contact</button>
                </form>
            </>
        );
    }
 }