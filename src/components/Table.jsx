import ModeButtons from "./ModeButtons"
import Description from "./Description"
import Hours from "./Hours"
import Rate from "./Rate"

export default function Table() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <ModeButtons isEditing={false}/>
            <Description isEditing={false} value="Web Developer"/>
            <Rate isEditing={false} value="1000"/>
            <Hours isEditing={false} value ="40"/>
          </tr>
          <tr>
            <ModeButtons isEditing={true}/>
            <Description isEditing={true} value="Zoo Keeper"/>
            <Rate isEditing={true} value="1000000"/>
            <Hours isEditing={true} value ="40"/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
