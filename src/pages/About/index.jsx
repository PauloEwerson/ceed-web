import React from 'react';
import LogoHeader from '../../assets/images/imagem-01.svg'

const About = () => {

  return (
    <section className="py-8 bg-yellow-500">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-left text-title-blue"><span className="text-white">|</span> Sobre Nós</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-3xl text-title-blue font-bold leading-none mb-3">Quem Somos</h3>
          <p className="text-gray-600 mb-8">
          Desde a nossa fundação, temos trabalhado incansavelmente para oferecer uma educação de qualidade 
          em Patos e construir uma história de sucesso que se consolida a cada dia. 
          Acreditamos que nossos valores e objetivos são a chave para o melhor 
          desenvolvimento dos nossos alunos.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <img className="
            w-full
            md:w-4/5
            mx-auto
            shadow-lg
            rounded-lg
            border-b-8
            border-r-8
            border-sky-500
          " src={LogoHeader} alt="Sobre Nós" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-3xl text-title-blue font-bold leading-none mb-3">Missão</h3>
          <p className="text-gray-600 mb-8">
          Acreditamos que todos os alunos podem aprender e crescer. 
          Somos uma equipe apaixonada pela educação infantil e buscamos proporcionar 
          a melhor experiência educacional possível com a metodologia atualizada e abrangente. 
          Acreditamos que a aprendizagem é uma jornada emocionante e desafiadora para todos.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-3xl text-title-blue font-bold leading-none mt-5 mb-3">Metodologia</h3>
          <p className="text-gray-600 mb-8">
          Na nossa escola, acreditamos em princípios como autonomia, 
          cooperação e livre expressão para a aprendizagem dos alunos. 
          Valorizamos o protagonismo dos estudantes e nossos professores são intermediários, 
          assegurando condições favoráveis para aprender e desenvolver capacidades essenciais. 
          Buscamos proporcionar uma experiência educacional emocionante e desafiadora que 
          motive nossos alunos a crescer em sua própria jornada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
