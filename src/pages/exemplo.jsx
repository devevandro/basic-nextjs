import Cabecalho from "../components/Cabecalho";
import Link from 'next/link';

export default function Exemplo() {
  return (
    <>
      <Cabecalho titulo="Header" />
      <Cabecalho titulo="Header 5" />
      <Link href="/">
        Voltar
      </Link>
    </>
  );
}
