import Heading from "../components/Heading";
import { RowVertical } from "../components/Rows";
import LandingPageForm from "../features/landing/LandingPageForm";

export default function LandingPage() {
  return (
    <div>
      <RowVertical>
        <Heading type="h3">Aktualizácia titulnej strany</Heading>
      </RowVertical>

      <LandingPageForm />
    </div>
  );
}
