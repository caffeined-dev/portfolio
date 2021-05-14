import React from 'react';
import './home.scss';
import '../../css/mediaqueries.scss';

const APP = ["React", "React Native", "HTML/CSS", "SASS"];
const GAME = ["Unity", "Godot Engine"];
const BACKEND = ["Firebase", "MySQL"];
const LANGUAGES = ["Java", "Python", "Javascript"];

export default function Home() {

    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <div className="section w-100 d-flex flex-column align-items-center">
                <h2 className="media-width text-center">
                    Front-End Developer & Tutor
                </h2>
                <p className="media-width text-center text-white mt-3">
                    Hello! My name is David. Nice to meet you.
                </p>
            </div>
            <div className="section-long bg-white w-100 d-flex flex-column align-items-center">
                <div className="media-width section-content text-white p-5 d-flex flex-column justify-content-around align-items-center">
                    <p className="media-width text-center">
                        After starting developer work 3 years ago, I've had the opportunity
                        to work with various technologies working at BTree. From creating
                        websocket servers for mobile apps to creating simple web apps, I had
                        the pleasure of experiencing many different facets of programming.
                    </p>
                    <p className="media-width text-center">
                        As a tutor at BTree, I have been blessed with the opportunity to introduce
                        to students from a young age the joys of programming and the path to find
                        their way in the vast world of technologies that exist today.
                    </p>
                </div>
            </div>
            <div className="section w-100 d-flex flex-column align-items-center">
                <div className="media-width section-content text-white p-2 d-flex justify-content-between align-items-center">
                    <div className="section-column d-flex flex-column align-items-center">
                        {APP.map((v, i) => <p key={i} className="text-center">{v}</p>)}
                    </div>
                    <div className="divider h-75 m-1"/>
                    <div className="section-column d-flex flex-column align-items-center">
                        {LANGUAGES.map((v, i) => <p key={i} className="text-center">{v}</p>)}
                    </div>
                    <div className="divider h-75 m-1"/>
                    <div className="section-column d-flex flex-column align-items-center">
                        {BACKEND.map((v, i) => <p key={i} className="text-center">{v}</p>)}
                    </div>
                    <div className="divider h-75 m-1"/>
                    <div className="section-column d-flex flex-column align-items-center">
                        {GAME.map((v, i) => <p key={i} className="text-center">{v}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

