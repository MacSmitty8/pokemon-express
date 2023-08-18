import React from 'react'

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
}

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon</h1>
      {
        pokemon.map((pokemon, i) => {
          return (
            <ul key={i}>
              <li>
                <a href={`/pokemon/${i}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a> <br />
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}
module.exports = Index