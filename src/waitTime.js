'use strict';

class WaitTime extends React.Component {

    render() {
        if (this.props.ride && this.props.index !== undefined) {
            var displayClass = "";
            if (this.props.index > 0 && this.props.index < 4) {
                displayClass = " d-none d-md-block"
            } else if (this.props.index > 3) {
                displayClass = " d-none d-lg-block"
            }
            return (
                <div className={"col border-right" + displayClass} style={{ textAlign: 'center', paddingHorizontal: 5, paddingBottom: 5, paddingTop: 20 }}>
                    <h4><strong>{this.props.ride.name}</strong></h4>
                    <div style={{ fontSize: 30 }}>{!this.props.ride.closed ? this.props.ride.waitTime : "Closed"}</div>
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

        this.getImportantRides = this.getImportantRides.bind(this);
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

    getImportantRides() {
        const importantRides = ["Revenge of the Mummy!", "MEN IN BLACK Alien Attack", "Hollywood Rip Ride Rockit", "Harry Potter and the Escape from Gringotts", "Fast & Furious - Supercharged", "Despicable Me Minion Mayhem"]
        if (this.state.waitTimeData.length <= 6) {
            return this.state.waitTimeData;
        } else {
            return this.state.waitTimeData.filter((ride) => importantRides.indexOf(ride.name) > -1)
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="col-md-12">
                    <div style={{ marginTop: 20 }} className="d-flex flex-column justify-content-center">
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
                <div className="row row-eq-height border-bottom">
                    {this.getImportantRides().filter((ride, index) => ride.isQueueable && index <= 6).map((ride, index) => {
                        console.log(ride)
                        return (
                            <WaitTime ride={ride} index={index} />
                        )
                    })}
                </div>
            );
        }
    }
}

const domContainer = document.querySelector('#wait_time_container');
ReactDOM.render(<WaitTimeContainer />, domContainer);
