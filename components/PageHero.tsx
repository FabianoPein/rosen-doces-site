import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="bg-[#C95A54] py-16 text-center text-white mb-12 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;