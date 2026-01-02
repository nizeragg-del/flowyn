import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../config/images';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-[#0B0F19]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero.background}
          alt="Background"
          className="w-full h-full object-cover object-[85%_center] md:object-right opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-[#0B0F19]/40 to-[#0B0F19] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-white mb-6">
            Sites que transformam <br />
            <span className="italic font-light text-cyan-200/90">visitantes</span> em <span className="italic text-cyan-400 font-semibold">clientes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            A Flowyn cria experiências digitais estratégicas, com design premium,
            foco em conversão e crescimento real para marcas que querem
            vender todos os dias.
          </p>

          <a
            href="https://wa.me/5515997056218?text=Olá%20Flowyn!%20Quero%20um%20site%20que%20venda%20e%20gostaria%20de%20solicitar%20um%20orçamento%20estrategico%20para%20o%20meu%20negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-[#0B0F19] px-8 py-4 rounded-full font-bold text-sm tracking-wide inline-flex items-center gap-3 hover:bg-cyan-50 transition-all hover:scale-105 duration-300 w-fit"
          >
            QUERO UM SITE QUE VENDE
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Strategic Quote */}
      <div className="absolute right-12 bottom-32 z-30 max-w-md text-right hidden lg:block">
        <p className="font-ibm italic text-cyan-200/40 text-lg leading-relaxed">
          "Objetivos grandes não precisam de esforço contra a corrente — precisam da Flowyn."
        </p>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white z-20 rounded-t-[50px] md:rounded-t-[80px] lg:rounded-t-[100px] scale-110 translate-y-12"></div>
    </section>
  );
};