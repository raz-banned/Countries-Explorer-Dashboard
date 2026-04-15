import { useParams } from "react-router";
import CountryInfo from "../CountryInfo";

function CountryPage() {
  const { code } = useParams();

  return (
    <>
      <CountryInfo code={code} />
    </>
  );
}

export default CountryPage;
