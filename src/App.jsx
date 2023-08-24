import './App.css';
import Table from "./components/Table"



function App({data}) {
  return (
    
  <Table data = {data}/>)
}

export default App;

// Component Hierarchy
// - Table 
//    - Header
//    - Row
//      - Mode buttons
//        - Edit/Delete
//        - Save
//      - Description
//      - Rate
//      - Hours
//    - Add Button (adds a row)

// Data Pieces
//   -Id:Unchangeable 
//   -Rate
//     -State
//     -Table row
//   -Hours
//     -State
//     -Table row
//   -Description
//     -State
//     -Table row
//   -Total 
//     -Not state - calculated by other state
//   -Edit mode
//     -State - changes over time
//     -Table row
//   -Starting/running data
//     -State - changes over time with updates
//     -InvoiceTable


  