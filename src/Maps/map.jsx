import React from 'react';

function Map(props){
    return(
        <div>
            <h3> 안녕하세요. {props.name}({props.age})</h3>
        </div>
    )
}

export default Map