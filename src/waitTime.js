'use strict';

const MySlider = window.Slider.default;

console.log(window.Slider.default)

class WaitTime extends React.Component {
    render() {
        if (this.props.ride) {
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{this.props.ride.name}</h4>
                            <p className="card-text">{this.props.ride.isOpen ? this.props.ride.waitTime : "Closed"}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
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
            waitTimeData: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://x52l516ijj.execute-api.us-east-1.amazonaws.com/default/getWaitTimes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'mRJLbwV6WD8ZTVqWoG2tq2dWWYb2ogHc6IDEDqLV'
            },
            body: JSON.stringify({ "park": "USF" })
        }).then(response => response.json())
            .then(responseJSON => {
                this.setState({ waitTimeData: responseJSON, loading: false })
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            )
        } else {
            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
            };
            console.log(Slider)
            console.log(WaitTime)
            return (
                <div className="d-flex" style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
                        <MySlider {...settings}>
                            {this.state.waitTimeData.filter((ride) => ride.isQueueable).map((ride) => {
                                console.log(ride)
                                return (
                                    <WaitTime ride={ride} />
                                )
                            })}
                        </MySlider>
                    </div>
                </div>

            );
        }
    }
}

const domContainer = document.querySelector('#wait_time_container');
ReactDOM.render(<WaitTimeContainer />, domContainer);
