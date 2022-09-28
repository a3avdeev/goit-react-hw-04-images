import React from "react";
// import PropTypes from "prop-types";
import {ModalStyled} from './Modal.Styled'


export const Modal = ({ data, onClose }) => {
    return  <ModalStyled onClick={(e) => onClose(e)}>
        <div>
            <img src={data.largeImageURL} alt={data.tags} />
        </div>
    </ModalStyled>
} 