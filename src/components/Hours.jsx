
export default function Hours({ isEditing, value, onValueChange }) {
  return isEditing ? (
    <td>
      <input type="text" value={value} onChange = {(e)=>onValueChange(e.target.value)}/>
    </td>
  ) : (
    <td>{value}</td>
  );
}
