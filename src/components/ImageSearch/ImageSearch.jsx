import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from '../../services/fetchImages';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { GalleryWrapper } from './ImageSearch.Styled';
import { Modal } from '../Modal/Modal';

export default class ImageSearch extends Component {
  state = {
    inputValue: '',
    items: [],
    loading: false,
    page: 1,
    error: null,
    modal: false,
    dataModal: {},
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
    
    componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if ((inputValue && prevState.inputValue !== inputValue) || page > prevState.page) {
        this.getImages();
        }
    };

    hadleFormSubmit = inputValue => {
        this.setState({ inputValue })
    };

    loadMoreFn = async () => {
        this.setState(({ page }) => {
            return {
                page: page + 1,
            }
        })
    };

    onModalOpen = (id) => {
        const { items } = this.state;
        const openLargeImage = items.find(item => item.id === id);
        const { onModalClose } = this;
        
        this.setState({
            modal: true,
            dataModal: openLargeImage,
        })
        document.addEventListener('click', onModalClose)
        document.addEventListener('keydown', onModalClose)
    };

    onModalClose = (e) => {
        if (e.currentTarget === e.target || e.code === 'Escape') {
            this.setState({ modal: false, })
            document.removeEventListener('click', this.onModalClose)
            document.removeEventListener('keydown', this.onModalClose)
        }
    };

    render() {
        const { items, loading, error, modal, dataModal } = this.state;
        const { hadleFormSubmit, loadMoreFn, onModalOpen, onModalClose } = this;
        const isImages = items.length !== 0;

        return <GalleryWrapper>
            <Searchbar onSubmit={hadleFormSubmit} />
            {isImages && <ImageGallery data={items} modalOpen={onModalOpen} />}
            {loading && <Loader />}
            {error && <p>Please try again later</p>}
            {isImages && <Button onClick={loadMoreFn} />}
            {modal && <Modal data={dataModal} onClose={onModalClose} />}
            <ToastContainer autoClose={3000} />
        </GalleryWrapper>
    }
}


// modalOpen={modalOpen} 