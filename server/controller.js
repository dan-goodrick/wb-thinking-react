import idGenerator from '../src/utils/idGenerator.js';

let TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];
const getId = idGenerator(TEST_DATA.length);

const handlerFunctions = {
  getInvoices: (req, res)=>{
    res.send(TEST_DATA)
  },

  addRow:(req, res) => {
    const {description, rate, hours} = req.body
    console.log("body", req.body)
    const row = {
      id: getId.next().value,
      description:description, 
      rate:Number(rate) || 0,
      hours:Number(hours)||0,
    }
    TEST_DATA.push(row); 
    res.send(row)
  },

  editRow: (req, res)=> {
    const {description, rate, hours} = req.body
    const i = TEST_DATA.findIndex((el)=> el.id === +req.params.id)
    let row = TEST_DATA[i]
    row.description = description ?? row.description 
    row.rate = +(rate ?? row.rate )
    row.hours = +(hours ?? row.hours )
    TEST_DATA[i] = row
    res.send(row)
  },
  
  delRow: (req, res) => {
    TEST_DATA = TEST_DATA.filter(row => row.id!== +req.params.id)// cast id to a number

    res.send(`id: ${req.params.id} deleted`)
  }
}

export default handlerFunctions