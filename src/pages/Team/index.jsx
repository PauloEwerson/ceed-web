import { useState } from 'react';
import CarouselTeam from '../../components/CarouselTeam'
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
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8 md:mb-0">
          <h1 className="my-2 text-5xl font-bold leading-tight text-left text-title-blue">
            <span className="text-white">|</span> Equipe</h1>
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          <h3 className="text-3xl text-title-blue font-bold leading-none mb-3">Conheça as <span className="text-yellow-500">mentes brilhantes</span> por trás do sucesso <span className="text-yellow-500">da nossa escola</span>.</h3>
          <p className="text-white mb-8">Selecione a turma abaixo.</p>
          <section className="flex flex-row flex-wrap justify-center items-center text-white">
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === 'Maternalzinho' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('Maternalzinho')
            }}>
              Maternalzinho
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === 'Maternal' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('Maternal')
            }}>
              Maternal
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === 'Jardim I' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('Jardim I')
            }}>
              Jardim I
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === 'Jardim II' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('Jardim II')
            }}>
              Jardim II
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === '1 Ano' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('1 Ano')
            }}>
              1 Ano
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === '2 Ano' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('2 Ano')
            }}>
              2 Ano
            </button>
            <button className={`text-lg font-bold w-1/3 h-12 bg-blue-500 flex justify-center items-center rounded-lg mx-2 my-2 ${selectedOption === '3 Ano' && 'border-4 border-yellow-500/100'}`} onClick={() => {
              handleOptionSelect('3 Ano')
            }}>
              3 Ano
            </button> 
          </section>
        </div>
        <div className="flex justify-center">
          <CarouselTeam images={optionsToImages[selectedOption]} />
        </div>
      </div>
    </div>
  )
}


