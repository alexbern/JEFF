const five = require('johnny-five');

class SensorPoint {
  constructor(pin, threshold) {
    this.isOn = false;

    new five.Sensor(pin).on('change', (value) => {
      if (value > threshold){
        this.isOn = false;
      } else{
        this.isOn = true;
      }
    });
  }
};

module.exports = SensorPoint;
