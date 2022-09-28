import React from "react";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ data}) => {
    
    return <p>
    <img src={data.webformatURL} width="320" heigth="220" alt={data.tags} loading="lazy" />
    </p>
}


ImageGalleryItem.propTypes = {
    data: PropTypes.object
}