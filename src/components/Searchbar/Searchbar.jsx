import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { SearchbarStyled, HeaderStyled } from './Searchbar.Styled';
import PropTypes from "prop-types";

export default function Searchbar({onSubmit}) {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            return toast.error("Please, input something", {
                theme: "colored"
            });
        }

        onSubmit(inputValue);
        setInputValue(inputValue);
    }

    return (
            <HeaderStyled>
                <SearchbarStyled onSubmit={handleSubmit}>
                    <button type="submit">
                        <BsSearch />
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
            </HeaderStyled>
        );
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
