'use strict';

class WaitTime extends React.Component {
    render() {
      if (this.props.ride) {
        return (
            <div>
                <h1>{this.props.ride.name}</h1>
                <p>{this.props.ride.waitTime}</p>
            </div>
          );
      } else {
          return (
              <div>
                  <p>No ride found! You shouldn't ever see this message.</p>
              </div>
          )
      }
  
    }
  }

class WaitTimeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        waitTimeData: [] 
    };
  }

  componentDidMount() {
      fetch("https://x52l516ijj.execute-api.us-east-1.amazonaws.com/default/getWaitTimes", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'mRJLbwV6WD8ZTVqWoG2tq2dWWYb2ogHc6IDEDqLV'
          },
          body: JSON.stringify({"park": "USF"})
      }).then(response => response.json())
      .then(responseJSON => {
          this.setState({waitTimeData: responseJSON})
      })
  }

  render() {
    return (
        <div>
            {this.state.waitTimeData.map((ride) => {
                return (
                    <WaitTime ride={ride} />
                )
            })}
        </div>
    );
  }
}

const domContainer = document.querySelector('#wait_time_container');
ReactDOM.render(<WaitTimeContainer />, domContainer);
