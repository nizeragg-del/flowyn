import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { images } from '../config/images';

export const About: React.FC = () => {
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Images & Stats */}
          <div className="relative">
            {/* Main Image (Dashboard) */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src={images.about.dashboard}
                alt="Dashboard Analytics"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Card 1 */}
            <div className="absolute -top-12 -left-4 md:-left-6 bg-white p-4 md:p-6 shadow-xl rounded-lg z-20 max-w-[140px] md:max-w-[180px]">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B0F19] mb-1">100+</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">Projetos Digitais</p>
            </div>

            {/* Secondary Image (Code/Mobile) - Absolute positioned */}
            <div className="absolute -bottom-16 -right-4 w-3/4 md:-bottom-20 md:-right-12 md:w-2/3 rounded-lg overflow-hidden shadow-2xl z-20 border-4 md:border-8 border-white">
              <img
                src={images.about.development}
                alt="Code Development"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stat Card 2 */}
            <div className="absolute -bottom-16 md:-bottom-6 left-4 md:left-20 bg-white p-4 md:p-6 shadow-xl rounded-lg z-30 max-w-[160px] md:max-w-[220px]">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B0F19] mb-1">300%</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold leading-tight">Aumento médio em conversão</p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="pt-12 lg:pt-0">
            <span className="inline-block px-4 py-1 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
              Sobre a Flowyn
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0B0F19] mb-6 leading-tight">
              CRIAMOS <br />
              ESTRATÉGIAS DIGITAIS <br />
              <span className="italic text-cyan-500">SOB MEDIDA</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Desenvolvemos soluções digitais completas para marcas que querem crescer com consistência,
              posicionamento e vendas. Não entregamos apenas sites, entregamos ecossistemas de crescimento.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { title: 'Sites institucionais e páginas de vendas', desc: 'Otimizados para velocidade e conversão.' },
                { title: 'Design estratégico focado em conversão', desc: 'Layouts que guiam o usuário até a compra.' },
                { title: 'Performance, SEO e experiência do usuário', desc: 'Sua marca encontrada por quem procura.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-cyan-100 rounded-full p-1 h-fit">
                    <Check size={16} className="text-cyan-600" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B0F19] text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5515997056218?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20e%20um%20orçamento%20para%20o%20meu%20projeto%20com%20a%20Flowyn."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0F19] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide inline-flex items-center gap-3 hover:bg-gray-800 transition-colors w-fit"
            >
              SOLICITAR PROPOSTA
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};