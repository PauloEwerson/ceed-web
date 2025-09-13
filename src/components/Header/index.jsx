import { useState } from 'react'
import { Link } from 'react-scroll';
import { Dialog, Popover } from '@headlessui/react'
import LogoHeader from '../../assets/images/logo-header.png'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

// https://tailwindui.com/components/marketing/elements/headers
export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="bg-juicy-blue-space-light fixed w-full text-white z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link to="home" smooth={true} duration={500} className="-m-1.5 p-1.5 cursor-pointer">
          <span className="sr-only">CEED</span>
          <img
            className="h-8 w-auto"
            src={LogoHeader}
            alt="Logo Header"
          />
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => toggleNavbar()}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="home" smooth={true} duration={500} className="text-sm font-semibold leading-6 cursor-pointer">Início</Link>
          <Link to="about" smooth={true} duration={500} className="text-sm font-semibold leading-6 cursor-pointer">Sobre</Link>
          <Link to="structure" smooth={true} duration={500} className="text-sm font-semibold leading-6 cursor-pointer">Estrutura</Link>
          <Link to="contact" smooth={true} duration={500} className="text-sm font-semibold leading-6 cursor-pointer">Contato</Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={isExpanded} onClose={toggleNavbar}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          focus="true"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-juicy-blue-space-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
          <Link to="home" smooth={true} duration={500} className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">CEED</span>
            <img
              className="h-8 w-auto"
              src={LogoHeader}
              alt="Logo Header"
            />
          </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => toggleNavbar()}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center">
                <Link to="home" smooth={true} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-600" onClick={toggleNavbar}>Início</Link>
                <Link to="about" smooth={true} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-600" onClick={toggleNavbar}>Sobre</Link>
                <Link to="structure" smooth={true} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-600" onClick={toggleNavbar}>Estrutura</Link>
                <Link to="contact" smooth={true} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-600" onClick={toggleNavbar}>Contato</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}