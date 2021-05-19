import axios from 'axios';
import actions from './phonebook-actions';
axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsSuccess());
  try {
    const { data } = await axios.get(`/contacts`);

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
  //   axios
  //     .get(`/contacts`)
  //     .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
  //     .catch(error => dispatch(actions.fetchContactsError(error)));
};

const makeCard = (name, number) => dispatch => {
  const contact = { text: name, number };

  dispatch(actions.makeCardRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.makeCardSuccess(data)))
    .catch(error => dispatch(actions.makeCardError(error)));
};

const deleteCard = id => dispatch => {
  dispatch(actions.deleteCardRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteCardSuccess(id)))
    .catch(error => dispatch(actions.deleteCardError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { makeCard, deleteCard, fetchContacts };
