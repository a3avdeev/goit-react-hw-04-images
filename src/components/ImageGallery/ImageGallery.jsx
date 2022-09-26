import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = (modalOpen, data) => { 
  return <ul>
    {data.map(item => {
    return <li key={item.id}>
    <ImageGalleryItem modalOpen={modalOpen} data={item} />
      </li>})}
</ul>
}
