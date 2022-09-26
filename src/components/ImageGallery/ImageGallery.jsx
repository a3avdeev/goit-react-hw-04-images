import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ data, modalOpen }) =>
    <ul>
        {data.map(item => <li key={item.id}>
                <ImageGalleryItem modalOpen={modalOpen} data={item} />
            </li>
        )}
    </ul>

