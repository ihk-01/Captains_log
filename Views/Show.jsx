const React = require('react');

class Show extends React.Component {
    render() {
        return (
            <div>
            <h1>Logs Show Page</h1>
            { this.props.log.title }
            <br/>
            { this.props.log.entry }
            <br/>
            { this.props.log.isShipBroken ? `It is broken` : `It is not broken`}
            <br/>
            <a href={'/logs'}>Back</a>
            </div>

        )
        }
}
module.exports = Show;