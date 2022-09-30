import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {GalleryList} from './ImageGallery.Styled'
import PropTypes from "prop-types";

export const ImageGallery = ({modalOpen, data }) => {
  // console.log(data)
  return <GalleryList>
          {data.map(item => <li key={item.id}>
                  <ImageGalleryItem data={item} modalOpen={modalOpen}/>
              </li>
          )}
      </GalleryList>
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  modalOpen: PropTypes.func.isRequired,
}