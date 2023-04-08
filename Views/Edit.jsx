const React = require('react');

class Edit extends React.Component {
    render() {
        const log = this.props.log
        return (
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" defaultValue={log.title}/>
            <br/>
            <label htmlFor="entry">Log Entry:</label>
            <input type="text" name="entry" defaultValue={log.entry}/>
            <br/>
            <label htmlFor="isShipBroken">Is Ship Broken:</label>
        {
          log.isShipBroken ?
          <input type="checkbox" name="isShipBroken" defaultChecked/> :
          <input type="checkbox" name="isShipBroken" />
        }
        <br />
            <input type="submit" name="" value="Submit Changes!"/>
            </form>

        )
}
}
module.exports = Edit;