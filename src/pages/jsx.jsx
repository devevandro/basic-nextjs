export default function Jsx() {
  const titulo = <h1>JSX é um conceito central</h1>;

  function subtitulo() {
    return <h2>{"Muito legal".toUpperCase()}</h2>;
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({nome: "Teste", idade: "20"})}
      </p>
    </div>
  );
}
