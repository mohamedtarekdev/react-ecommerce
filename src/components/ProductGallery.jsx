import React from 'react';
import ImageGallery from 'react-image-gallery';
import RightArrowButton from './RightArrowButton';
import LeftArrowButton from './LeftArrowButton';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductGallery = ({ images }) => {
    return (
        <div className="gallary-card d-flex justfiy-content-center align-items-center pt-2">
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightArrowButton}
                renderLeftNav={LeftArrowButton}
            />
        </div>
    );
};

export default ProductGallery;
