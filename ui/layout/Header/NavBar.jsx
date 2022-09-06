import Container from "../Container";
import Label from "../../utilities/Label";

export default function NavBar() {
  return (
    <Container component="nav">
      <ul>
        <Label component={"li"}>Projects</Label>
      </ul>
    </Container>
  );
}
