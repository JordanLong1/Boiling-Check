import React from 'react'; 

const BoilingCheck = props => {
    if (props.degrees >= 100) {
        return <p>The water will boil</p>
    } else {
        return <p>The water will not boil</p>
    };
};


export default BoilingCheck;