import { Name, Item, List, Btn } from '../Contacts/Contacts.styled'
//
export const FiltredContactList = ({ filtredContacts, delContact }) => {
    return (
        <List>
            {filtredContacts.map(({ id, name, number }) => {
                return (
                    <Item key={id} >
                        <Name>{name}: {number}</Name>
                        <Btn
                            type='button'
                            onClick={() => delContact(id)} >Dellite</Btn>
                        
                    </Item>
                );
            })}
        </List>
    )
};

