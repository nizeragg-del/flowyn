import React from 'react';
import { Monitor, Palette, Megaphone, Rocket } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Sites que Vendem',
    description: 'Sites rápidos, modernos e pensados para converter visitantes em clientes reais através de UX avançado.',
    icon: 'monitor'
  },
  {
    id: 2,
    title: 'Branding & Design',
    description: 'Identidade visual forte, coerente e alinhada com o posicionamento high-ticket da sua marca.',
    icon: 'palette'
  },
  {
    id: 3,
    title: 'Social Media',
    description: 'Conteúdo com estratégia, autoridade e foco em vendas para construir sua comunidade.',
    icon: 'megaphone'
  },
  {
    id: 4,
    title: 'Performance Digital',
    description: 'Otimização, SEO on-page e estrutura preparada para escalar seu tráfego orgânico e pago.',
    icon: 'rocket'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'monitor': return <Monitor size={28} />;
    case 'palette': return <Palette size={28} />;
    case 'megaphone': return <Megaphone size={28} />;
    case 'rocket': return <Rocket size={28} />;
    default: return <Monitor size={28} />;
  }
};

export const Services: React.FC = () => {
  return (
    <section className="bg-[#0f1421] py-24" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold text-xs tracking-widest uppercase mb-2 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Expertise Digital Completa
            <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-[#161c2e] p-8 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};