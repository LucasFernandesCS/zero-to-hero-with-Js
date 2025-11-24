function Home() {
  return (
    <>
      <style>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
          }

          h1 {
            font-size: 3rem;
            color: #333;
            text-align: center;
          }

          p {
            font-size: 1.5rem;
            color: #333;
            text-align: center;
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <h1>Em Construção</h1>
      <p>
        Esta ferramenta está em desenvolvimento para ajudá-lo a organizar suas
        atividades, tarefas e serviços.
      </p>
    </>
  );
}

export default Home;
