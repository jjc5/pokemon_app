const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};

class Index extends React.Component {
  render(){
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
      </div>
    )
  }
}

module.exports = Index;
