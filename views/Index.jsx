const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};
const caseStyle = {
  textTransform: 'capitalize'
}

class Index extends React.Component {
  render(){
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <button><a href='/pokemon/new'>Create a New Pokemon</a></button>
        <ul>
          {
            pokemon.map((pokemon, i) => {
              return(
                <li style={caseStyle}>
                  {pokemon.name}<a href={`/pokemon/${pokemon._id}`}>click</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;
