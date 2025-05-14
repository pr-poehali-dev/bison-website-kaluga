
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-dark mb-4">Связаться с нами</h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Хотите узнать больше о зубрах Калужской области или посетить заповедники? Свяжитесь с нами!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Отправить сообщение</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-dark/70 mb-1">Ваше имя</label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark/70 mb-1">Электронная почта</label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark/70 mb-1">Сообщение</label>
                  <Textarea id="message" placeholder="Ваше сообщение..." className="min-h-32" />
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/80 text-dark">
                  Отправить
                </Button>
              </div>
            </form>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-dark text-light p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-light/10 rounded-full p-2 mr-4 mt-1">
                    <Icon name="MapPin" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p className="text-light/80">
                      Калужская область, г. Калуга, ул. Заповедная, д. 10
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light/10 rounded-full p-2 mr-4 mt-1">
                    <Icon name="Phone" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <p className="text-light/80">+7 (4842) 12-34-56</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light/10 rounded-full p-2 mr-4 mt-1">
                    <Icon name="Mail" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-light/80">info@zubry-kaluga.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light/10 rounded-full p-2 mr-4 mt-1">
                    <Icon name="Clock" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Часы работы</h4>
                    <p className="text-light/80">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-light/10 p-2 rounded-full hover:bg-accent hover:text-dark transition-colors">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-light/10 p-2 rounded-full hover:bg-accent hover:text-dark transition-colors">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-light/10 p-2 rounded-full hover:bg-accent hover:text-dark transition-colors">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-light/10 p-2 rounded-full hover:bg-accent hover:text-dark transition-colors">
                    <Icon name="Youtube" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
