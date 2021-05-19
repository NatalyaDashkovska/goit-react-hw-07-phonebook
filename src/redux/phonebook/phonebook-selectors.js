import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;
// const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getAllContacts = state => state.phonebook.contacts;
// const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getAllContacts(state);
//   const normalize = filter.toLowerCase();
//   return contacts.filter(({ text }) => text.toLowerCase().includes(normalize));
// };

const getVisibleContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normalize = filter.toLowerCase();

    return contacts.filter(({ text }) =>
      text.toLowerCase().includes(normalize),
    );
    // return contacts;
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getLoading, getAllContacts, getFilter, getVisibleContacts };
