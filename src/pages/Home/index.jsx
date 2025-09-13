import React from 'react';
import Button from '../../components/Button';

function Home() {
  const handlePreMatricula = () => {
    window.location.href = 'https://forms.gle/e8fAuNxiQGyvnPUa6';
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-juicy-blue-space-light bg-body-stars px-4">
      <img src="/logo.png" alt="Centro Educacional Estrela Dalva" className="w-60" />
      <h1 className="text-4xl font-bold mt-8 text-slate-100 text-center">
        Nossa constelação é formada por estrelas como você
      </h1>
      <div className="mt-8 w-full flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
        <Button
          label="PRÉ-MATRÍCULA"
          onClick={handlePreMatricula}
          className="w-auto max-w-sm px-6 py-3 text-center"
        />
        {/* <Button label="AGENDA ESCOLAR" primary={true} onClick={handleAgenda}/> */}
      </div>
    </div>
  );
}

export default Home;