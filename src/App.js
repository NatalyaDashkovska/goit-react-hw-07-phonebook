import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import styles from './index.module.css';

import { phonebookOperations, phonebookSelectors } from './redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h2>Loading</h2>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
  isLoadingContacts: phonebookSelectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  makeCard: text => dispatch(phonebookOperations.makeCard(text)),
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
