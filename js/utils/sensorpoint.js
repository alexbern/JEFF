const five = require('johnny-five');

class SensorPoint {
  constructor(pin, threshold, boardId) {

    const boards = window.jeffApp.boards;

    this.isOn = false;

    new five.Sensor({pin: pin, board: boards.byId(boardId)}).on('change', (value) => {
      if (value > threshold){
        this.isOn = false;
      }else{
        this.isOn = true;
      }
    });
  }
};

module.exports = SensorPoint;
//
