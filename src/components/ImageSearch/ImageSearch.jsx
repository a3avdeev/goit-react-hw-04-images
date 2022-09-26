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

  async getImages() {
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

  onLoadMoreClick = () => {
      this.setState(({ page }) => {
          return {
              page: page + 1
          }
      })
      this.getImages()
  }

  onModalOpen = (id) => {
        const imageToOpen = this.state.items.find(item => item.id === id);
        
        this.setState({
            modal: true,
            dataModal: imageToOpen,
        })
  }

  render() {
    const { items, loading, modal, dataModal } = this.state;
      const isImages = Boolean(items.lenght);
      const { hadleFormSubmit, onLoadMoreClick } = this;
    return <>
        <Searchbar onSubmit={hadleFormSubmit} />
        {isImages && <ImageGallery data={items} />}
        {loading && <Loader />}
        {isImages && <Button onClick={onLoadMoreClick} />}
        {modal && <Modal data={dataModal} />}
        <ToastContainer autoClose={3000} />
      </>
  }
}
