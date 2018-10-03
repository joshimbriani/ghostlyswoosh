'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MySlider = window.Slider.default;

var WaitTime = function (_React$Component) {
    _inherits(WaitTime, _React$Component);

    function WaitTime() {
        _classCallCheck(this, WaitTime);

        return _possibleConstructorReturn(this, (WaitTime.__proto__ || Object.getPrototypeOf(WaitTime)).apply(this, arguments));
    }

    _createClass(WaitTime, [{
        key: "render",
        value: function render() {
            if (this.props.ride) {
                return React.createElement(
                    "div",
                    { className: this.props.index % 3 !== 2 ? " border-right" : "", style: { textAlign: 'center', height: '100%', padding: 5 } },
                    React.createElement(
                        "h4",
                        null,
                        React.createElement(
                            "strong",
                            null,
                            this.props.ride.name
                        )
                    ),
                    React.createElement(
                        "div",
                        { style: { fontSize: 30 } },
                        !this.props.ride.closed ? this.props.ride.waitTime : "Closed"
                    ),
                    !this.props.ride.closed && React.createElement(
                        "div",
                        null,
                        "minutes"
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "No ride found! You shouldn't ever see this message."
                    )
                );
            }
        }
    }]);

    return WaitTime;
}(React.Component);

var WaitTimeContainer = function (_React$Component2) {
    _inherits(WaitTimeContainer, _React$Component2);

    function WaitTimeContainer(props) {
        _classCallCheck(this, WaitTimeContainer);

        var _this2 = _possibleConstructorReturn(this, (WaitTimeContainer.__proto__ || Object.getPrototypeOf(WaitTimeContainer)).call(this, props));

        _this2.state = {
            waitTimeData: [],
            loading: false
        };
        return _this2;
    }

    _createClass(WaitTimeContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this.setState({ loading: true });
            fetch("https://x52l516ijj.execute-api.us-east-1.amazonaws.com/default/getWaitTimes", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'mRJLbwV6WD8ZTVqWoG2tq2dWWYb2ogHc6IDEDqLV'
                },
                body: JSON.stringify({ "park": "USF" })
            }).then(function (response) {
                return response.json();
            }).then(function (responseJSON) {
                _this3.setState({ waitTimeData: responseJSON, loading: false });
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading) {
                return React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { style: { marginTop: 20 }, className: "d-flex flex-column justify-content-center" },
                        React.createElement("img", { src: "/images/icons/loading.svg", alt: "Loading" }),
                        React.createElement(
                            "div",
                            { className: "text-center" },
                            "Loading..."
                        )
                    )
                );
            } else {
                var settings = {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3
                };
                return React.createElement(
                    "div",
                    { className: "d-flex", style: { width: '100%', alignItems: 'center', justifyContent: 'center' } },
                    React.createElement(
                        "div",
                        { style: { width: '80%', marginRight: 'auto', marginLeft: 'auto' } },
                        React.createElement(
                            MySlider,
                            settings,
                            this.state.waitTimeData.filter(function (ride) {
                                return ride.isQueueable;
                            }).map(function (ride, index) {
                                console.log(ride);
                                return React.createElement(WaitTime, { ride: ride, index: index });
                            })
                        )
                    )
                );
            }
        }
    }]);

    return WaitTimeContainer;
}(React.Component);

var domContainer = document.querySelector('#wait_time_container');
ReactDOM.render(React.createElement(WaitTimeContainer, null), domContainer);