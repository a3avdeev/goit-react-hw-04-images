import { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchbarStyled } from './Searchbar.Styled';
import PropTypes from "prop-types";

export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.currentTarget.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { inputValue } = this.state;

        if (inputValue.trim() === '') {
            return toast.error("Please, input something", {
                theme: "colored"
            });
        }

        this.props.onSubmit(inputValue)
        this.setState({ inputValue: '', });
    }

    render() {
        const { inputValue } = this.state;
        const { handleSubmit, handleInputChange } = this;
        return (
            <header>
                <SearchbarStyled onSubmit={handleSubmit}>
                    <button type="submit">
                        <BiSearchAlt />
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={handleInputChange}
                        name='inputValue'
                    />
                </SearchbarStyled>
            </header>
        );
    }
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
