import React from 'react';
import './LazyImage.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage(props) {
    const refPlaceholder = React.useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };

    return (
        <div class="image-container">
            <div ref={refPlaceholder}>ImageLoading</div>
            <LazyLoadImage
                onLoad={() => removePlaceholder()}
                onError={() => removePlaceholder()}
                alt='image'
                height='100%'
                width='100%'
                src={props.imageSrc} />
        </div>
    )
}

export default LazyImage
