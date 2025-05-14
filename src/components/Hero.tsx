
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden hero-pattern">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1585344931819-7c21361d3ffb?q=80&w=2070&auto=format&fit=crop')", 
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto z-10 px-4 relative">
        <div className="max-w-3xl bg-dark/80 p-8 rounded-lg backdrop-blur-sm animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">
            Зубры Калужской области
          </h1>
          <p className="text-xl md:text-2xl text-light/90 mb-8">
            Познакомьтесь с удивительными животными, возвращенными в дикую природу Средней России
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent hover:bg-accent/80 text-dark font-medium text-lg px-8 py-6">
              Узнать больше
            </Button>
            <Button variant="outline" className="border-light text-light hover:bg-light/10 font-medium text-lg px-8 py-6">
              Экскурсии
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
