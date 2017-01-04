var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var self = this;
    this.setState({
      isLoading: true
    })
    openWeatherMap.getTemp(location).then(function(data) {
      self.setState({
        location: location,
        temp: data,
        isLoading: false
      })
    }, function(error) {
      self.setState({
        isLoading: false
      })
      alert(error);
    });

  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {/* <WeatherMessage location={this.state.location} temp={this.state.temp}/> */}
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather;

// a1a4085162cabcaa54f5f85f642060c8
// http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&units=metric&appid=a1a4085162cabcaa54f5f85f642060c8
