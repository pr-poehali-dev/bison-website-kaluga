
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-light p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Icon name="Bison" className="h-10 w-10 text-accent mr-3" />
          <h1 className="text-2xl font-bold">Зубры Калужской области</h1>
        </div>
        
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-accent transition-colors">О зубрах</a></li>
            <li><a href="#gallery" className="hover:text-accent transition-colors">Галерея</a></li>
            <li><a href="#facts" className="hover:text-accent transition-colors">Факты</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
          </ul>
        </nav>
        
        <Button className="mt-4 md:mt-0 bg-accent hover:bg-accent/80 text-dark">
          Поддержать проект
        </Button>
      </div>
    </header>
  );
};

export default Header;
