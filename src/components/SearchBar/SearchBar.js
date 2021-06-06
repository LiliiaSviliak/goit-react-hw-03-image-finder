import React, { Component } from 'react';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        query: '',
    };
    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        this.props.onSubmit({ query });
        this.setState({ query: '' });
    };
    render() {
        const { query } = this.state;
        // console.log(query);
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        name="query"
                        value={query}
                    />
                    <button type="submit" className={styles.button}>
                        <span className={styles.button_label}>Search</span>
                    </button>
                </form>
            </header>
        );
    }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;