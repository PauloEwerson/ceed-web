import React from 'react';
import bg from '../../assets/images/bg-about.png';

export default function Structure() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="my-2 text-5xl font-bold leading-tight text-left text-title-blue">
          <span className="text-white">|</span> Estrutura</h1>
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            <h4 className="text-3xl text-title-blue font-bold leading-none mb-3">
              Conheça o cantinho onde nossos pequenos exploram de forma <span className="text-yellow-500">colorida e lúdica</span> 
              para estimular o <span className="text-yellow-500">aprendizado</span> e a 
              <span className="text-yellow-500">criatividade</span>.
            </h4>
        </div>
      </div>
    </div>
  )
}