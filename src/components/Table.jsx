import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";
import "./Table.css";
import { useState } from "react";
import axios from "axios";

export default function Table({ data }) {
  // let [isEditing, setIsEditing] = useState(true);  //Table row is a closer parent to description

  let [currentList, setCurrentList] = useState(data);
  const addRow = async () => {
    // // get a copy of the current list
    // const newInvoiceList = [...currentList]
    // // create a new blank object for new row
    // const newRow = {id: globalId, description:'description', rate:'', hours:''}
    // // push new object into my copied list
    // newInvoiceList.push(newRow)
    // // update list state with the new version of the list
    // destructure from body.data
    let { data } = await axios.post("/invoice", {
      description: "from front",
      rate: 10,
      hours: 12,
    });
    console.log("row", data);
    setCurrentList([...currentList, data]);
  };
  const deleteRow = async (id) => {
    // filter out the id
    // update list state with the new version of the list
    //  setCurrentList(currentList.filter(el => el.id!==id))
    const { data } = await axios.delete(`/invoice/${id}`);
    if (!data.error) {
      setCurrentList(currentList.filter((el) => el.id !== id));
    }
    console.log("deleted", data);
  };
 
  const rows = currentList.map((el) => {
    const { id, description, rate, hours } = el;
    return (
      <TableRow
        key={id}
        id={id}
        deleteFunc={()=>deleteRow(id)} //can't send id with the function name but an anonymous function doesn't run
        initialInvoiceData={{
          description: description,
          rate: rate,
          hours: hours,
        }}
        saveClick = {()=>editRow(id)}
        initialIsEditing={false}
      />
    );
  });
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <AddButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  );
}
