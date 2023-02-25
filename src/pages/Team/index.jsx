import { useState } from 'react';
import Carousel from '../../components/Carousel'
import Maternalzinho1 from '../../assets/images/equipe/maternalzinho-1.jpg';
import Maternalzinho2 from '../../assets/images/equipe/maternalzinho-2.jpg';
import Maternal1 from '../../assets/images/equipe/maternal-1.jpg';
import Maternal2 from '../../assets/images/equipe/maternal-2.jpg';
import JardimI from '../../assets/images/equipe/jardim-I-1.jpg';
import JardimII1 from '../../assets/images/equipe/jardim-II-1.jpg';
import JardimII2 from '../../assets/images/equipe/jardim-II-2.jpg';
import PrimeiroAno1 from '../../assets/images/equipe/primeiro-ano-1.jpg';
import SegundoAno1 from '../../assets/images/equipe/segundo-ano-1.jpg';
import TerceiroAno1 from '../../assets/images/equipe/terceiro-ano-1.jpg';

export default function Team() {
  const [selectedOption, setSelectedOption] = useState('Maternalzinho');

  const optionsToImages = {
    'Maternalzinho': [
      `${Maternalzinho1}`,
      `${Maternalzinho2}`,
    ],
    'Maternal': [
      `${Maternal1}`,
      `${Maternal2}`,
    ],
    'Jardim I': [
      `${JardimI}`,
    ],
    'Jardim II': [
      `${JardimII1}`,
      `${JardimII2}`,
    ],
    '1 Ano': [
      `${PrimeiroAno1}`,
    ],
    '2 Ano': [
      `${SegundoAno1}`,
    ],
    '3 Ano': [
      `${TerceiroAno1}`,
    ],
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div id="team" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 justify-around flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="mb-8 md:mb-0 flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 className="my-2 text-5xl font-bold leading-tight text-left text-title-blue">
            <span className="text-white">|</span> Equipe</h1>
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          <h3 className="text-3xl text-title-blue font-bold leading-none mb-3">Conheça as <span className="text-yellow-500">mentes brilhantes</span> por trás do sucesso <span className="text-yellow-500">da nossa escola</span>.</h3>
          <p className="text-white mb-8">Selecione a turma abaixo.</p>
          <section className="flex flex-row flex-wrap justify-center items-center text-white">
            {Object.keys(optionsToImages).map((option, index) => (
              <button
                key={index}
                className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === option && 'border-4 border-yellow-500/100'
                  }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </section>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-full lg:w-1/2 xl:w-1/2">
          <Carousel images={optionsToImages[selectedOption]} />
        </div>
      </div>
    </div>
  )
}


