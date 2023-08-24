
// colSpan is the number of columns the button spans
export default function AddButton({addClick}) {
  return (
    <tr>
      <td></td>
      <td colSpan="4">
        <button onClick={addClick}>Add</button>
      </td>
    </tr>
  );
}
