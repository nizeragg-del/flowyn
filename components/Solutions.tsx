import React from 'react';
import { ArrowRight, ShoppingCart, Layout, Share2 } from 'lucide-react';
import { images } from '../config/images';

export const Solutions: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-24" id="projetos">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
              Soluções
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0B0F19] leading-tight">
              Qual solução digital é ideal para o seu negócio?
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 border border-[#0B0F19] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0F19] hover:bg-[#0B0F19] hover:text-white transition-colors">
            Ver Portfólio Completo <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={images.solutions.institutional}
              alt="Site Institucional"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight size={20} className="text-[#0B0F19]" />
            </div>

            <div className="absolute bottom-8 left-8">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit text-white mb-3">
                <Layout size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Site Institucional Premium</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={images.solutions.salesPage}
              alt="Sales Page"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight size={20} className="text-[#0B0F19]" />
            </div>
            <div className="absolute bottom-8 left-8">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit text-white mb-3">
                <ShoppingCart size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Página de Vendas Estratégica</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={images.solutions.socialMedia}
              alt="Social Media"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight size={20} className="text-[#0B0F19]" />
            </div>
            <div className="absolute bottom-8 left-8">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit text-white mb-3">
                <Share2 size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Gestão de Redes Sociais</h3>
            </div>
          </div>

        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <button className="flex items-center gap-2 border border-[#0B0F19] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0F19] hover:bg-[#0B0F19] hover:text-white transition-colors">
            Ver Portfólio Completo <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};