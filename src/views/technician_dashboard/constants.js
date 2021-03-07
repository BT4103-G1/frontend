export const usersData = [
  {id: 0, name: 'John Doe', registered: 'random(10, 99).toString()18/01/01', role: 'Guest', status: 'Pending'},
  {id: 1, name: 'Samppa Nori', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Active'},
  {id: 2, name: 'Estavan Lykos', registered: 'random(10, 99).toString()18/02/01', role: 'Staff', status: 'Banned'},
  {id: 3, name: 'Chetan Mohamed', registered: 'random(10, 99).toString()18/02/01', role: 'Admin', status: 'Inactive'},
  {id: 4, name: 'Derick Maximinus', registered: 'random(10, 99).toString()18/03/01', role: 'Member', status: 'Pending'},
  {id: 5, name: 'Friderik Dávid', registered: 'random(10, 99).toString()18/01/21', role: 'Staff', status: 'Active'},
  {id: 6, name: 'Yiorgos Avraamu', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Active'},
  {id: 7, name: 'Avram Tarasios', registered: 'random(10, 99).toString()18/02/01', role: 'Staff', status: 'Banned'},
  {id: 8, name: 'Quintin Ed', registered: 'random(10, 99).toString()18/02/01', role: 'Admin', status: 'Inactive'},
  {id: 9, name: 'Enéas Kwadwo', registered: 'random(10, 99).toString()18/03/01', role: 'Member', status: 'Pending'},
  {id: 10, name: 'Agapetus Tadeáš', registered: 'random(10, 99).toString()18/01/21', role: 'Staff', status: 'Active'},
  {id: 11, name: 'Carwyn Fachtna', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Active'},
  {id: 12, name: 'Nehemiah Tatius', registered: 'random(10, 99).toString()18/02/01', role: 'Staff', status: 'Banned'},
  {id: 13, name: 'Ebbe Gemariah', registered: 'random(10, 99).toString()18/02/01', role: 'Admin', status: 'Inactive'},
  {id: 14, name: 'Eustorgios Amulius', registered: 'random(10, 99).toString()18/03/01', role: 'Member', status: 'Pending'},
  {id: 15, name: 'Leopold Gáspár', registered: 'random(10, 99).toString()18/01/21', role: 'Staff', status: 'Active'},
  {id: 16, name: 'Pompeius René', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Active'},
  {id: 17, name: 'Paĉjo Jadon', registered: 'random(10, 99).toString()18/02/01', role: 'Staff', status: 'Banned'},
  {id: 18, name: 'Micheal Mercurius', registered: 'random(10, 99).toString()18/02/01', role: 'Admin', status: 'Inactive'},
  {id: 19, name: 'Ganesha Dubhghall', registered: 'random(10, 99).toString()18/03/01', role: 'Member', status: 'Pending'},
  {id: 21, name: 'Vishnu Serghei', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Active'},
  {id: 22, name: 'Zbyněk Phoibos', registered: 'random(10, 99).toString()18/02/01', role: 'Staff', status: 'Banned'},
  {id: 23, name: 'Aulus Agmundr', registered: 'random(10, 99).toString()18/01/01', role: 'Member', status: 'Pending'},
  {id: 42, name: 'Ford Prefect', registered: 'random(10, 99).toString()01/05/25', role: 'Alien', status: 'Don\'t panic!'}
]

const random = (min, max)=>{
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const jetData = [
  {jet_type: "F35", serial_no: random(100000, 999999).toString(), RUL: 51, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F18", serial_no: random(100000, 999999).toString(), RUL: 49, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F18", serial_no: random(100000, 999999).toString(), RUL: 40, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F35", serial_no: random(100000, 999999).toString(), RUL: 310, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F18", serial_no: random(100000, 999999).toString(), RUL: 53, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F16", serial_no: random(100000, 999999).toString(), RUL: 130, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use:"5/2/2020"},
  {jet_type: "F15", serial_no: random(100000, 999999).toString(), RUL: 57, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F15", serial_no: random(100000, 999999).toString(), RUL: 42, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F15", serial_no: random(100000, 999999).toString(), RUL: 57, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F15", serial_no: random(100000, 999999).toString(), RUL: 124, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use:"5/2/2020"},
  {jet_type: "F16", serial_no: random(100000, 999999).toString(), RUL: 30, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F18", serial_no: random(100000, 999999).toString(), RUL: 57, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
  {jet_type: "F16", serial_no: random(100000, 999999).toString(), RUL: 150, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use:"5/2/2020"},
  {jet_type: "F18", serial_no: random(100000, 999999).toString(), RUL: 30, last_used: random(10, 99).toString(), last_serviced: random(10, 99).toString(), next_use: "5/2/2020"},
]

export const jetFields = [
  {key: 'jet_type', _style: {width: '40%'}},
  'serial_no',
  {key: 'RUL', _style: {width: 'random(10, 99).toString()%'}},
  {key: 'last_used', _style: {width: 'random(10, 99).toString()%'}},
  {key: 'last_serviced', _style: {width: 'random(10, 99).toString()%'}},
  {key: 'next_use', _style: {width: 'random(10, 99).toString()%'}},
]


export const fields = [
  {key: 'name', _style: {width: '40%'}},
  'registered',
  {key: 'role', _style: {width: 'random(10, 99).toString()%'}},
  {key: 'status', _style: {width: 'random(10, 99).toString()%'}},
  {
    key: 'show_details',
    label: '',
    _style: {width: '1%'},
    sorter: false,
    filter: false
  }
]

export const getBadge = (rul) => {
  if (rul < 50) return {color: 'success', health: 'Normal'}
  else if (rul < 100 && rul >= 50) return {color: 'warning', health: 'Warning'}
  else if (rul >= 100) return {color: 'danger', health: 'Critical'}
  else return {color: 'primary', health: 'Repair'}
}

