import React, { Fragment, useEffect } from "react";
import { Image } from "react-bootstrap";
import { run as runHolder } from 'holderjs/holder';

export function HolderExample() {
    useEffect(() => {        
        runHolder('image-class-name');
    });
    return (
         <Fragment>
           <Image 
                  className="image-class-name"
                  roundedCircle
                  src="holder.js/20x20?text=J&bg=22a745&fg=FFF"
            /> 
          </Fragment>
    );
    }