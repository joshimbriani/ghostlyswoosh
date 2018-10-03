'use strict';

const MySlider = window.Slider.default;

class WaitTime extends React.Component {

    render() {
        if (this.props.ride) {
            return (
                <div className={(this.props.index % 3 !== 2 ? " border-right" : "")} style={{ textAlign: 'center', height: '100%', padding: 5 }}>
                    <h4><strong>{this.props.ride.name}</strong></h4>
                    <div style={{fontSize: 30}}>{!this.props.ride.closed ? this.props.ride.waitTime : "Closed"}</div>
                    {!this.props.ride.closed && <div>minutes</div>}
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
                <div className="col-md-12">
                    <div style={{marginTop: 20}} className="d-flex flex-column justify-content-center">
                        <img src="/images/icons/loading.svg" alt="Loading" />
                        <div className="text-center">Loading...</div>
                    </div>
                    
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
            return (
                <div className="d-flex" style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
                        <MySlider {...settings}>
                            {this.state.waitTimeData.filter((ride) => ride.isQueueable).map((ride, index) => {
                                console.log(ride)
                                return (
                                    <WaitTime ride={ride} index={index} />
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
