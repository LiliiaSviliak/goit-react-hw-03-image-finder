import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ getNewPage }) => {
  // console.log(getNewPage);
  return (
    <button
      className={styles.Button}
      type="button"
      data-action="load-more"
      // disabled={true}
      onClick={getNewPage}
    >
      Show more
    </button>
  );
};
Button.propTypes = {
  getNewPage: PropTypes.func.isRequired,
};
export default Button;