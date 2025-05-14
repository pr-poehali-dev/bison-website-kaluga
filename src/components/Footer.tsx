
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Bison" className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-xl font-bold">Зубры Калужской области</h3>
            </div>
            <p className="text-light/70 mb-4">
              Сайт посвящен сохранению и изучению популяции зубров в Калужской области.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light/70 hover:text-accent">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-light/70 hover:text-accent">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-light/70 hover:text-accent">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-light/70 hover:text-accent">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/70 hover:text-accent">Главная</a></li>
              <li><a href="#about" className="text-light/70 hover:text-accent">О зубрах</a></li>
              <li><a href="#gallery" className="text-light/70 hover:text-accent">Галерея</a></li>
              <li><a href="#facts" className="text-light/70 hover:text-accent">Интересные факты</a></li>
              <li><a href="#contact" className="text-light/70 hover:text-accent">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/70 hover:text-accent">Национальный парк «Угра»</a></li>
              <li><a href="#" className="text-light/70 hover:text-accent">Заповедник «Калужские засеки»</a></li>
              <li><a href="#" className="text-light/70 hover:text-accent">WWF России</a></li>
              <li><a href="#" className="text-light/70 hover:text-accent">Красная книга России</a></li>
              <li><a href="#" className="text-light/70 hover:text-accent">Экотуризм в Калужской области</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                <span className="text-light/70">Калужская область, г. Калуга, ул. Заповедная, д. 10</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-accent mr-2 shrink-0" />
                <span className="text-light/70">+7 (4842) 12-34-56</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-accent mr-2 shrink-0" />
                <span className="text-light/70">info@zubry-kaluga.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light/10 pt-6 text-center">
          <p className="text-light/50 text-sm">
            © 2024 Зубры Калужской области. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
