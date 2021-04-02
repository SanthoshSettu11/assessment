import React, { useEffect } from 'react';
import './Card.css';
import LazyImage from '../LazyImage/LazyImage';

function Card(props) {
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <div className="card">
            <div className="image-container-box">
                <LazyImage imageSrc={props.imageURl}></LazyImage>
            </div>
            <div className="details-container">
                {props.noodle && <div>
                    <div className="detail-label">{props.noodle.Brand}</div>
                    <div className="detail-label">{props.noodle.Variety}</div>
                    <div className="detail-label">{props.noodle.Style}</div>
                    <div className="detail-label">{props.noodle.Country}</div>
                    <div className="detail-label">{props.noodle.Stars}</div>
                    <div className="detail-label">{props.noodle['Top Ten']}</div>
                </div>}
            </div>
        </div>
    )
}

export default Card;
