import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {GalleryList} from './ImageGallery.Styled'
import PropTypes from "prop-types";

export const ImageGallery = ({ data }) => {
  console.log(data)
  return <GalleryList>
          {data.map(item => <li key={item.id}>
                  <ImageGalleryItem data={item} />
              </li>
          )}
      </GalleryList>
}

ImageGallery.propTypes = {
  data: PropTypes.array
}