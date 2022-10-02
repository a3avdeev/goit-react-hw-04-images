import React, { useState, useEffect } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from '../../services/fetchImages';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { GalleryWrapper } from './ImageSearch.Styled';
import { Modal } from '../Modal/Modal';

export default function ImageSearch() {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [loadMore, setLoadMore] = useState(false);


    useEffect(() => {
        if (inputValue === '') {
            return
        }

        const getImages = async () => {
            setLoading(true);
            try {
                const data = await fetchImages(inputValue, page);
                if (data.hits.length === 0) {
                        toast.warn ("Sorry, there are no images matching your search query", {
                        theme: "colored"
                    })
                    }
                else if (data.hits.length < 12) {
                    setItems((prevItems) => [...prevItems, ...data.hits])
                    setLoadMore(false);
                } else {
                    setItems((items) => 
                        [...items, ...data.hits])
                        // console.log('total find', data.totalHits);
                        // console.log('total loaded', items.length + 12);
                        // console.log('left to load', data.totalHits - (items.length + 12));
                    setLoadMore(true);
                }
            } catch (error) {
                setError(error);
                }
            finally {
                setLoading(false);
                }
            }
                getImages();
            }, [inputValue, page]);
    
    const hadleFormSubmit = input => {
        if (input !== inputValue) {
            setInputValue(input);
            setItems([]);
            setPage(1);
            setLoadMore(false);
        }
    };

    const loadMoreFn = () => {
        setPage((prevpage) => prevpage + 1);
    };

    const onModalOpen = (id) => {
        const openLargeImage = items.find(item => item.id === id);
        
        setModal(true);
        setDataModal(openLargeImage);
        
        document.addEventListener('click', onModalClose)
        document.addEventListener('keydown', onModalClose)
    };

    const onModalClose = (e) => {
        if (e.currentTarget === e.target || e.code === 'Escape') {
            setModal(false);
            document.removeEventListener('click', onModalClose)
            document.removeEventListener('keydown', onModalClose)
        }
    };

    const isImages = items.length !== 0;

    return <GalleryWrapper>
        <Searchbar onSubmit={hadleFormSubmit} />
        {isImages && <ImageGallery data={items} modalOpen={onModalOpen} />}
        {loading && <Loader />}
        {error && <p>Please try again later</p>}
        {loadMore && <Button onClick={loadMoreFn} />}
        {modal && <Modal data={dataModal} onClose={onModalClose} />}
        <ToastContainer autoClose={3000} />
    </GalleryWrapper>
}
