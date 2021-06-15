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
        <ul>
          {
            pokemon.map((pokemon, i) => {
              return(
                <li style={caseStyle}>
                  {pokemon.name}
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
