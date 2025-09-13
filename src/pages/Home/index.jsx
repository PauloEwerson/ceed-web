import React from 'react';
import Button from '../../components/Button';

function Home() {
  const handlePreMatricula = () => {
    window.location.href = 'https://forms.gle/e8fAuNxiQGyvnPUa6';
  };

/*   const handleAgenda = () => {
    window.location.href = 'https://sistema.education1.com.br/estreladalva/resp20';
  }; */

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-juicy-blue-space-light bg-body-stars">
      <img src="/logo.png" alt="Centro Educacional Estrela Dalva" className="w-60" />
      <h1 className="text-4xl font-bold mt-8 text-slate-100 text-center">
        Nossa constelação é formada por estrelas como você
      </h1>
      <div className="mt-8 text-center">
        <Button label="PRÉ-MATRÍCULA" onClick={handlePreMatricula} />
        {/* <Button label="AGENDA ESCOLAR" primary={true} onClick={handleAgenda}/> */}
      </div>
    </div>
  );
}

export default Home;
