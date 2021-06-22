const React = require('react');

class New extends React.Component {
  render() {
    return(
      <div>
          <h1>New Pokemon page</h1>
          <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" /><br/>
            Type: <input type="text" name="type" /><br/>
            Img: <input type="text" name="img" /><br/>
            <input type="submit" name="" value="Create Pokemon"/>
          </form>
      </div>
      );
  }
}

module.exports = New;
