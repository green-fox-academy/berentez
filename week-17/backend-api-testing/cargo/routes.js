const express = require('express');
const app = express();

let cargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false,
};

app.use(express.json());

app.get('/rocket', (req, res) => {
  const response = cargo;

  if (response === undefined) {
    res.status(500).json({
      error: 'no cargo data',
    });
  } else {
    res.status(200).json(response);
  }
});

app.get('/rocket/fill', (req, res) => {
  const { caliber } = req.query;
  const { amount } = req.query;
  updateCargo(caliber, amount);

  if (caliber === undefined || amount === undefined) {
    res.status(500).json({
      error: 'no data given',
    });
  } else {
    const result = fillCargo(caliber, amount);
    res.status(200);
    res.json(result);
  }
});

app.get('/rocket/zero', (req, res) => {
  cargo = {
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 'empty',
    ready: false,
  };
  res.status(200);
  res.json(cargo);
});

const fillCargo = (caliber, amount) => {
  let resBody = {
    received: caliber,
    amount: amount,
    shipstatus: checkShipStatus(),
    ready: readyCheck(),
  };
  return resBody;
};

const checkShipStatus = () => {
  let ammo = parseInt(cargo.caliber25) + parseInt(cargo.caliber30) + parseInt(cargo.caliber50);
  let percent = (ammo / 12500) * 100;
  let response = '0%';

  if (percent > 100) {
    response = 'overloaded';
  } else if (percent === 100) {
    response = 'full';
  } else {
    response = `${percent}%`;
  }
  cargo.shipstatus = response;
  return response;
};

const readyCheck = () => {
  if (checkShipStatus() === 'full') {
    return true;
  }
  return false;
};

const updateCargo = (caliber, amount) => {
  ammo = parseInt(amount);
  if (caliber === '.50') {
    cargo.caliber50 += ammo;
  } else if (caliber === '.30') {
    cargo.caliber30 += ammo;
  } else {
    cargo.caliber25 += ammo;
  }
};

module.exports = app;
