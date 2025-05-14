
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-dark mb-4">О зубрах Калужской области</h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Зубр - самое крупное наземное млекопитающее Европы, практически истребленное к началу XX века. 
            Благодаря усилиям ученых и экологов популяция зубров восстанавливается.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24695baccd12?q=80&w=2070&auto=format&fit=crop" 
              alt="Зубры в естественной среде" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="flex flex-col justify-center animate-on-scroll">
            <h3 className="text-2xl font-bold text-dark mb-4">Возвращение в дикую природу</h3>
            <p className="text-dark/80 mb-4">
              В Калужской области программа по восстановлению популяции зубров началась в 2014 году. 
              Сегодня в заповедниках и национальных парках региона обитает более 100 особей зубра.
            </p>
            <p className="text-dark/80">
              Эти величественные животные находятся под особой охраной и являются гордостью региона.
              Калужская популяция зубров считается одной из наиболее успешных в России по показателям прироста.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-nature/20 border-nature animate-on-scroll">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-nature rounded-full p-2 mr-4">
                  <Icon name="Weight" className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark">Вес и размеры</h3>
              </div>
              <p className="text-dark/80">
                Вес взрослого самца зубра может достигать 1 тонны, а высота в холке - до 2 метров. 
                Самки меньше примерно на треть.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-nature/20 border-nature animate-on-scroll">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-nature rounded-full p-2 mr-4">
                  <Icon name="Apple" className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark">Питание</h3>
              </div>
              <p className="text-dark/80">
                Рацион зубров состоит из трав, листьев, побегов деревьев и кустарников. 
                В день одна особь съедает около 40-60 кг растительной пищи.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-nature/20 border-nature animate-on-scroll">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-nature rounded-full p-2 mr-4">
                  <Icon name="HeartPulse" className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark">Продолжительность жизни</h3>
              </div>
              <p className="text-dark/80">
                В естественных условиях зубры живут до 20-25 лет. В неволе при хорошем уходе могут доживать до 30 лет.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
