import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from '../../services/fetchImages';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { ImageGallery } from '../ImageGallery/ImageGallery';

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
          console.log(data)
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

    hadleFormSubmit = inputValue => {
    this.setState({ inputValue, })

    this.getImages()
  };

  loadMore = () => {
      this.setState(({ page }) => {
          return {
              page: page + 1
          }
      })
      this.getImages()
  }

  modalOpen = (id) => {
        const openLargeImage = this.state.items.find(item => item.id === id);
        
        this.setState({
            modal: true,
            dataModal: openLargeImage,
        })
      
        // document.addEventListener('click', this.modalClose)
        // document.addEventListener('keydown', this.modalClose)
  }

    // modalClose = (ev) => {
    //     if (ev.currentTarget === ev.target || ev.code === 'Escape') {
    //         this.setState({ modal: false, })
            
    //         document.removeEventListener('click', this.modalClose)
    //         document.removeEventListener('keydown', this.modalClose)
    //     }
    // }

  render() {
    const { items, loading, modal, dataModal, error } = this.state;
      const isImages = Boolean(items.lenght);
      const { hadleFormSubmit, loadMore, modalOpen, modalClose } = this;
    return <>
        <Searchbar onSubmit={hadleFormSubmit} />
        {isImages && <ImageGallery items={items} modalOpen={modalOpen}/>}
        {loading && <Loader />}
        {error && <p>Please try again later</p>}
        {isImages && <Button onClick={loadMore} />}
        {modal && <Modal data={dataModal} onClose={modalClose}/>}
        <ToastContainer autoClose={3000} />
      </>
  }
}
