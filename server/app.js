import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import ctrl from './controller.js'

const port = 2319

const app = express()

// middleware
app.use(morgan('dev'))  // logs when invoked with npm run dev
app.use(express.urlencoded({extended:false}))
app.use(express.static('public')) // connect to the public folder
app.use(express.json())

// What is the purpose of the endpoint?
// Do I need additional information?
// What will the endpoints string look like
// What do I want the response to look like?
// Routes
// 1. get a list of all invoice data, No additional info, /invoice, [{rows}] 
app.get("/invoice", ctrl.getInvoices)
app.post("/invoice", ctrl.addRow)
app.put("/invoice/:id", ctrl.editRow)  // id will be in req.params
app.delete("/invoice/:id", ctrl.delRow)
// Start the server
ViteExpress.config({ printViteDevServerHost: true });
ViteExpress.listen(app, port, ()=> console.log(`Let's go!  http://localhost:${port}`))