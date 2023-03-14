import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {Tooltip, OverlayTrigger}from 'react-bootstrap';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from './img';



const MyComponent=(props)=>{

        return(
            <SimpleReactLightbox>
                <div>                            
                <SRLWrapper>            
                <ul className="clinic-gallery">
                    <li >
                        <a>
                            <img src={IMG03} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={IMG04} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={IMG05} alt="Feature"/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={IMG06} alt="Feature" data-attribute="SRL"/>
                        </a>
                    </li>
                </ul>
            
                </SRLWrapper>
            </div>
        </SimpleReactLightbox>              
        );
    }


export default MyComponent;