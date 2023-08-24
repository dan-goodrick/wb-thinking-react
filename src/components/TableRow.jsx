import ModeButtons from "./ModeButtons";
import Description from "./Description";
import Hours from "./Hours";
import Rate from "./Rate";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";
import axios from "axios";

export default function TableRow({
  initialInvoiceData,
  initialIsEditing,
  deleteFunc,
  id,
}) {
  const [description, setDescription] = useState(
    initialInvoiceData.description
  );
  const [rate, setRate] = useState(initialInvoiceData.rate);
  const [hours, setHours] = useState(initialInvoiceData.hours);
  let [editMode, setEditMode] = useState(initialIsEditing);
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = async () => {
    let body = { description, rate, hours };
    const { data } = await axios.put(`/invoice/${id}`, body); // data is a row
    if (!data.error) {
      setEditMode(false);
    } else {
      alert("Something broke.  Try again")
    }
    console.log(`Saved ${id} as ${body}`);
  };

  return (
    <tr>
      <ModeButtons
        isEditing={editMode}
        editClick={changeEditMode}
        saveClick={changeNormalMode}
        deleteFunc={deleteFunc}
      />
      <Description
        isEditing={editMode}
        value={description}
        onValueChange={setDescription}
      />
      <Rate isEditing={editMode} value={rate} onValueChange={setRate} />
      <Hours isEditing={editMode} value={hours} onValueChange={setHours} />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
}
