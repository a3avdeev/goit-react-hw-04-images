import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from '../../services/fetchImages';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { GalleryWrapper } from  './ImageSearch.Styled'

export default class ImageSearch extends Component {
  state = {
    inputValue: '',
    items: [],
    loading: false,
    page: 1,
    error: null,
    };

    getImages = async () => {
        const { inputValue, page } = this.state;
        this.setState({
        loading: true,
        });
        
    try {
        const data = await fetchImages(inputValue, page);
            this.setState(({ items }) => {
        return {
            items: [...items, ...data],
            
        }})
        
        } catch (error) {
        this.setState({error})
        }
        finally {
        this.setState({
            loading: false
        })
        }
    }
    
    componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;
    if ((inputValue && prevState.inputValue !== inputValue) || page > prevState.page) {
        this.getImages();
    }
    
    }

    hadleFormSubmit = inputValue => {
        this.setState({ inputValue })
    };

    loadMoreFn = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1,
            }
        })
        this.getImages()
    }

    render() {
        const { items, loading, error } = this.state;
        const isImages = items.length !== 0;
        console.log(isImages)
        const { hadleFormSubmit, loadMoreFn } = this;
        return <GalleryWrapper>
            <Searchbar onSubmit={hadleFormSubmit} />
            {isImages && <ImageGallery data={items} />}
            {loading && <Loader />}
            {error && <p>Please try again later</p>}
            {isImages && <Button onClick={loadMoreFn} />}
            <ToastContainer autoClose={3000} />
        </GalleryWrapper>
    }
}
