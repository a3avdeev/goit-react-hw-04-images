import { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';

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
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <BiSearchAlt />
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        name='inputValue'
                    />
                </form>
            </header>
        );
    }
    
}

