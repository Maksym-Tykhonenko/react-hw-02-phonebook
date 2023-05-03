import { Name, Item, List, Btn } from './Contacts.styled';

export const Contacts = ({ contacts, delContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Item key={id} >
                        <Name>{name}: {number}</Name>
                        <Btn
                            type='button'
                            onClick={() => delContact(id)}>Dellite</Btn>
                    </Item>
                )
            })}
        </List>
    )
};