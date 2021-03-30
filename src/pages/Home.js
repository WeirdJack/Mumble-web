import React from 'react'
import Card from '../components/Card';
import { Link } from "react-router-dom";

function Home() {
    
    return (
        <div className="container">
            <div className="row">
                <Link to="/dothraki">
                    <Card
                        title="Dothraki"
                        images="../../images/dothraki.jpeg"
                        alt="Dothraki"
                    />
                </Link>

                <Link to="/minion">
                    <Card
                        title="Minion"
                        images="../../images/minion.jpeg"
                        alt="Minion"
                    />
                </Link>

                <Link to="/mandolorian">
                    <Card
                        title="Mandolorian"
                        images="../../images/mandolorian.png"
                        alt="Mandolorian"
                    />
                </Link>

                <Link to="/pirate">
                    <Card
                        title="Pirate"
                        images=".../../images/pirate.png"
                        alt="Pirate"
                    />
                </Link>
            </div>
        </div>
        
    )
}

export default Home
