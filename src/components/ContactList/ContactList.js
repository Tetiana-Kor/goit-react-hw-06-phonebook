import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import s from './ContactList.module.css';

//TOOLKIT - 2
export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

//REDUX - 1
// import { connect } from 'react-redux';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
