const five = require('johnny-five');

module.exports = (pin, sens) => {

  var sensor = new five.Sensor(pin);

  sensor.on("change", (value) => {
    if (value > sens) {
      console.log(pin + ' is active with sensitivity of ' + sens);
      return 1;
    }else{
      console.log(pin + ' is unactive with sensitivity of ' + sens);
      return 0;
    }
  });

};
