import CountryInfo from '@/CountryInfo';
import { useParams } from 'react-router';

function CountryPage() {
  const { code } = useParams();
  if (!code) throw new Error('Невозможно найти код страны');

  return (
    <>
      <CountryInfo code={code} />
    </>
  );
}

export default CountryPage;
