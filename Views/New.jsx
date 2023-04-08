const React = require('react');

class New extends React.Component {
  render() {
    return (
    <div>
        <h1>New Log Entry Page</h1>
        <form action="/logs" method="POST">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title"/>
            <br/>
            <label htmlFor="entry">Log Entry:</label>
            <input type="textarea" name="entry"/>
            <br/>
            <label htmlFor="isShipBroken">Is Ship Broken:</label>
            <input type="checkbox" name="isShipBroken"/>
            <br/>
            <input type="submit" name="" value="Submit Log Entry"/>
            
        </form>
    </div>
    )
  }
}


module.exports = New;
