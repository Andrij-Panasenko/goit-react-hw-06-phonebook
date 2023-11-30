import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Notify } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <ul>
        {contacts.map(item => (
          <ContactItem key={item.id} values={item} />
        ))}
      </ul>
    </div>
  );
};
