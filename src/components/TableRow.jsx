import ModeButtons from "./ModeButtons";
import Description from "./Description";
import Hours from "./Hours";
import Rate from "./Rate";
import formatCurrency from "../utils/formatCurrency";

export default function TableRow({initialInvoiceData, initialIsEditing}) {
 const {description, rate, hours} = initialInvoiceData
  return (
    <tr>
    <ModeButtons isEditing={initialIsEditing} />
    <Description isEditing={initialIsEditing} value={description} />
    <Rate isEditing={initialIsEditing} value={rate} />
    <Hours isEditing={initialIsEditing} value={hours} />
    <td>{formatCurrency(rate*hours)}</td>
  </tr>
  )
}
