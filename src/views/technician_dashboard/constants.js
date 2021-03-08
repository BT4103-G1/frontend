const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const jetData = [
  {
    jet_type: "F35",
    serial_no: random(100000, 999999).toString(),
    RUL: 51,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F18",
    serial_no: random(100000, 999999).toString(),
    RUL: 49,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F18",
    serial_no: random(100000, 999999).toString(),
    RUL: 40,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F35",
    serial_no: random(100000, 999999).toString(),
    RUL: 310,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F18",
    serial_no: random(100000, 999999).toString(),
    RUL: 53,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F16",
    serial_no: random(100000, 999999).toString(),
    RUL: 130,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F15",
    serial_no: random(100000, 999999).toString(),
    RUL: 57,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F15",
    serial_no: random(100000, 999999).toString(),
    RUL: 42,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F15",
    serial_no: random(100000, 999999).toString(),
    RUL: 57,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F15",
    serial_no: random(100000, 999999).toString(),
    RUL: 124,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F16",
    serial_no: random(100000, 999999).toString(),
    RUL: 30,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F18",
    serial_no: random(100000, 999999).toString(),
    RUL: 57,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F16",
    serial_no: random(100000, 999999).toString(),
    RUL: 150,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
  {
    jet_type: "F18",
    serial_no: random(100000, 999999).toString(),
    RUL: 30,
    last_used: random(10, 99).toString(),
    last_serviced: random(10, 99).toString(),
    next_use: "5/2/2020",
  },
];

export const jetFields = [
  { key: "jet_type", _style: { width: "40%" } },
  "serial_no",
  { key: "RUL", _style: { width: "random(10, 99).toString()%" } },
  { key: "last_used", _style: { width: "random(10, 99).toString()%" } },
  { key: "last_serviced", _style: { width: "random(10, 99).toString()%" } },
  { key: "next_use", _style: { width: "random(10, 99).toString()%" } },
];

export const getBadge = (rul) => {
  if (rul < 50) return { color: "success", health: "Normal" };
  else if (rul < 100 && rul >= 50)
    return { color: "warning", health: "Warning" };
  else if (rul >= 100) return { color: "danger", health: "Critical" };
  else return { color: "primary", health: "Repair" };
};
