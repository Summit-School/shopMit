import React from "react";
export  const FeatAnimate  = (props) => {
    const { fimage } = props.fimg
    return ( 
        <div className="featAnimComponent">
        <div>
        <div className="featureAnim">
        <img src={fimage} alt="Car" />
        </div>
        </div>
        
            
        </div>

     )
}
 
