const five = require('johnny-five');

module.exports = (pin, sens) => {

  var sensor = new five.Sensor(pin);

  sensor.on("change", (value) => {
    if (value > sens) {
      console.log(pin + ' is unactive');
    }else{
      console.log(pin + ' is active');
    }
  });

};
