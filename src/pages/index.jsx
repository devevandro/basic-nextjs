import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div>
      <Navegador destino="/exemplo" texto="Exemplo" />
      <br />
      <Navegador destino="/jsx" texto="JSX" />
      <br />
      <Navegador destino="/navegacao" texto="Navegação #01" />
    </div>
  );
}
