import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { phonebookActions, phonebookSelectors } from '../../redux/phonebook';
const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.form}>
      <label>
        <p className={styles.title}>Filter</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.filterValue(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
