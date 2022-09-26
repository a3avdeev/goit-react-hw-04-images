import React from "react";

export const ImageGalleryItem = ({modalOpen, item}) => {
    return <li onClick={() => modalOpen(item.id)}>
        <a href={item.largeImageURL}>
            <img src={item.webformatURL} width="320" heigth="220" alt={item.tags} loading="lazy" />
        </a>
    </li>
}


