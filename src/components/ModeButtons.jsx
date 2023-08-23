export default function ModeButtons({ isEditing }) {

  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  );
}
