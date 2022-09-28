import React from "react";
import { ButtonStyled } from './Button.Styled';
import PropTypes from "prop-types";

export const Button = ({ onClick }) => {
    return <ButtonStyled type="button" onClick={() => onClick()}>LOAD MORE</ButtonStyled>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}