import React from "react";
import PropTypes from "prop-types";
import {ImageGalleryItemStyled} from './ImageGalleryItem.Styled'

export const ImageGalleryItem = ({modalOpen, data}) => {
    
    return <ImageGalleryItemStyled onClick={()=> modalOpen(data.id)}>
    <img src={data.webformatURL} width="320" heigth="220" alt={data.tags} loading="lazy" />
    </ImageGalleryItemStyled>
}

ImageGalleryItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
    modalOpen: PropTypes.func.isRequired,
}