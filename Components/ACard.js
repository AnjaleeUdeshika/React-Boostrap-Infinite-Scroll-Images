import React from "react";
import "../Styles/Cards.css";

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    faStar,
    faStarHalfAlt,
    faVideo,
    faDownload,
  } from "@fortawesome/free-solid-svg-icons";

function ACard(props) {
    const { title, text, image } = props;

    return (
      <div >

        {/* -------Main Container------ */}
        <Card className="Main-Card" >

          {/* -----Card Image------ */}
          <Card.Img 
            className="Card-Img" 
            variant="top" 
            src={image} 
          />

            {/* -----Card Body------ */}
            <Card.Body className="Card-Body">

            {/* -----Price Icon------ */}
            <div className="Icon-Price">$ 20</div>

            {/* -----Card Title------ */}
            <Card.Title className="Card-Header">{title}</Card.Title>

            {/* -----Card Description------ */}
            <Card.Text className="Card-Text">{text}</Card.Text>

            {/* -----Ratings------ */}
            <div className="Rating-Container">

              {/* -----Stars------ */}
                <div className="Star-Container">
                <FontAwesomeIcon 
                  className="Star" 
                  icon={faStar}  
                />

                <FontAwesomeIcon 
                  className="Star" 
                  icon={faStar}    
                />

                <FontAwesomeIcon 
                  className="Star" 
                  icon={faStar}  
                />

                <FontAwesomeIcon
                    className="Star"
                    icon={faStarHalfAlt}  
                />

                <FontAwesomeIcon 
                  className="Star" 
                  icon={faStar} 
                />
                
                </div>

                {/* ---Rating Count--- */}
                <div className="Rating-Count">4.8</div>
            </div>

            {/* -----footer---- */}
            <div className="Footer">

                {/* -----footer icons---- */}
                <div className="Footer-Icon-Group">

               {/* ----Youtube icon--- */}
                <FontAwesomeIcon
                    className="Icon"
                    icon={faYoutube}
                />
                <div className="Icon-Text">Video</div>
                </div>

                <div className="Footer-Icon-Group">

                {/* ----Video icon--- */}
                <FontAwesomeIcon
                    className="Icon"
                    icon={faVideo}
                />
                <div className="Icon-Text">60</div>
                </div>

                <div className="Footer-Icon-Group">
                
                {/* ----Download icon--- */}
                <FontAwesomeIcon
                    className="Icon"
                    icon={faDownload}
                />
                <div className="Icon-Text">80</div>
                </div>
            </div>
            </Card.Body>
          </Card>

      </div>
    );
  }
  
  export default ACard;