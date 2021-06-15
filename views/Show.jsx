const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};
const caseStyle = {
  textTransform: 'capitalize'
}

class Show extends React.Component {
  render(){
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch Em All!</h1>
        <h2 style={caseStyle}>{pokemon.name}</h2>
        <img src={pokemon.img + '.jpg'}></img>
        <br/>
        <a href='/pokemon'>BACK</a>
      </div>
    )
  }
}
module.exports = Show;
