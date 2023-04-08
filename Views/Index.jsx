const React = require('react');

class Index extends React.Component {
    render() {
        const logs = this.props.logs
        return (
            <div>
                <h1>Captain's Log index page</h1>
                <nav><a href="/logs/new">Create a new log entry</a></nav>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li key={i}>
                            
                                <a href={`/logs/${log._id}`}>
                                    {log.title}
                                </a>
                                <br/>
                                {log.entry} 
                                <br/>
                                {log.isShipBroken ? 'It is broken'
                                : 'It is not broken'}
                                <br/>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type = "submit" value = "DELETE"/>                           
                            </form>
                            <a href={`/logs/${log._id}/edit`}>EDIT THIS LOG</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;