import React from "react";

const myStyle ={
    color: '#ffffff',
    backgroundColor: '#000000',
}

function Show({pokemon}){
    return(
        <div style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img + '.jpg'} />
            <a href='/pokemon'>Back</a>
        </div>
    )
}

module.exports = Show