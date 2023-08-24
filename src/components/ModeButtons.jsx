export default function ModeButtons({ isEditing, editClick, saveClick, deleteFunc }) {

  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={editClick}>Edit</button>
      <button onClick={deleteFunc}>Delete</button>
    </td>
  );
}
