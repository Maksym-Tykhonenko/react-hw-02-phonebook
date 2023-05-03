import { Component } from "react"
import { Input } from './Filter.styled';


export class Filter extends Component {
    handleInputSearch = (e) => {
        console.log(e.currentTarget.value)
        this.props.searchContact(e.currentTarget.value)
    };

    render() {
        return (
            <>
                <Input
                    type="text"
                    onChange={this.handleInputSearch}
                    placeholder='search'/>
            </>
        );
    }
    
}