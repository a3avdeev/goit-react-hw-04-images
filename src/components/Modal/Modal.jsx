import React from "react";
import PropTypes from "prop-types";
import {ModalStyled} from './Modal.Styled'

export const Modal = ({ data, onClose }) => {
    return  <ModalStyled onClick={(e) => onClose(e)}>
        <div>
            <img src={data.largeImageURL} alt={data.tags} />
        </div>
    </ModalStyled>
}

Modal.propTypes = {
    data: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
}