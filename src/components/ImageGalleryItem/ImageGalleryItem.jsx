import React from "react";

export const ImageGalleryItem = ({modalOpen, data}) => {
    return <li onClick={() => modalOpen(data.id)}>
            <img src={data.webformatURL} width="320" heigth="220" alt={data.tags} loading="lazy" />
        </li>
}


