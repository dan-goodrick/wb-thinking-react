import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";
import "./Table.css";

export default function Table({ initialInvoiceList }) {
  // let [isEditing, setIsEditing] = useState(true);
  const rows = initialInvoiceList.map((el) => {
    const { id, description, rate, hours } = el;
    return (
      <TableRow
        key={id}
        initialInvoiceData={{
          description: description,
          rate: rate,
          hours: hours,
        }}
        initialIsEditing={false}
      />
    );
  });
  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <AddButton />
        </tfoot>
      </table>
    </div>
  );
}
