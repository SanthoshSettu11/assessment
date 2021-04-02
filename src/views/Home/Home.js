import React, { useEffect } from 'react';
import './Home.css';
import Card from './CardView/Card'

function Home(props) {

    useEffect(() => {

    });

    const chooseRandomImage = () => {
        let image = {
            Image: ''
        };
        if (props.ImageList) {
            image = props.ImageList[Math.floor(Math.random() * props.ImageList.length)];
        }
        return image ? image.Image : '';
    }

    return (
        <div className="wh-100vwh">
            <header className="header">
                <span>Noodles</span>
            </header>
            <section class="section-container">
                { props.NoodleList && <div class="noodles-container">
                    {props.NoodleList.map((noodleBrand, index) => {
                        return (<React.Fragment key={noodleBrand.Brand}>
                            <Card noodle={noodleBrand} imageURl={chooseRandomImage()}></Card>
                        </React.Fragment>)
                    })}
                </div>}
            </section>
        </div>
    )
}

export default Home
