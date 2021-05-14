import React from 'react';
import { Carousel } from 'react-bootstrap';
import './projects.scss';

export default function Projects() {

    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <h2 className="m-5">@BTree</h2>
            <p className="media-width text-center">
                My time at BTree taught me a lot about programming and development. I was able to improve my algorithmic knowledge in addition to 
                learning many technologies. As a startup company with few employees, I was involved in every step of the development life cycle so
                the experience has been invaluable.
            </p>
            <Carousel interval={null} className="media-width">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://puu.sh/HGwW6/95ead0ea6a.png"
                        alt="BTreeCode"
                    />
                    <Carousel.Caption>
                        <h3>BTreeCode</h3>
                        <p>Assisted in creating many parts of the BTreeCode tools and curriculum. Some projects include the practice tool for coding problems and the admin tool for instructors to track student progress.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images-na.ssl-images-amazon.com/images/I/81dpr1qvuVL.jpg"
                        alt="skm"
                    />
                    <Carousel.Caption>
                        <h3>Shan Koe Mee</h3>
                        <p>Our company at times had to create apps outside of the BTreeCode scope. These often involved technologies I've never used before. I had to actively learn the technology and push out a quality product for these consultations. In this case, I was working with a team in Korea remotely to set up a backend for their mobile gambling app. I used MySQL for the backend and websocket.io for communications between the client and database.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://puu.sh/HGwZg/7b4094b7b3.png"
                        alt="DB8"
                    />

                    <Carousel.Caption>
                        <h3>DB8</h3>
                        <p>Working at BTree included assisting students in developing apps for their own portfolio and for the Congressional App Challenge. DB8 was one I was actively a part of and have a wonderful experience guiding the students to a finished product.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2 className="m-5">@Me</h2>
            <p className="media-width text-center">
                A lot of my time outside of work is spent working with students on their own apps or answering any additional questions they may have outside of class. While it is 
            </p>
            <Carousel interval={null} className="media-width mb-5">
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://puu.sh/HGwBa/3b384784dc.png"
                        alt="Lunar Phoenix"
                    />
                    <Carousel.Caption>
                        <h3>lunarphoenix.io</h3>
                        <p>A site created using React to help organize events for my guild. Sets the schedule each week given weekly events and the times will display based on your timezone. Using Firebase for storing the events and Google's authentication for setting up accounts for the members. More to come.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://puu.sh/HGwNw/cef2add116.png"
                        alt="Caffeined Bot"
                    />

                    <Carousel.Caption>
                        <h3>caffeinedbot</h3>
                        <p>A bot created for the livestreaming site, twitch, personalized to the content for my stream. Focused on interaction with viewers. Using websocket.io to handle the connections and React to display results through a browser overlay on OBS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://puu.sh/HGwQW/31d2b76251.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Portfolio</h3>
                        <p>This portfolio was built from scratch using React. Using Bootstrap to assist with styling.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}