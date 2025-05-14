
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FactsSection: React.FC = () => {
  const facts = [
    {
      title: "Почти исчезнувший вид",
      content: "К 1927 году зубр был полностью истреблен в дикой природе. Все современные зубры происходят всего от 12 особей, сохранившихся в зоопарках и питомниках.",
      icon: "AlertTriangle"
    },
    {
      title: "Самое тяжелое наземное млекопитающее Европы",
      content: "Зубр является самым массивным наземным млекопитающим Европы. Взрослые самцы могут весить до 920 кг, а высота в холке достигает 1,8-2 метра.",
      icon: "Trophy"
    },
    {
      title: "Рекордные скорости",
      content: "Несмотря на внушительные размеры, зубр способен развивать скорость до 40-50 км/ч на коротких дистанциях и легко перепрыгивать препятствия высотой до 2 метров.",
      icon: "Gauge"
    },
    {
      title: "Зубр в заповедниках Калужской области",
      content: "В национальном парке «Угра» и заповеднике «Калужские засеки» обитает одна из самых успешных вольных популяций зубров в России. Ежегодно здесь рождается до 20 зубрят.",
      icon: "TreePine"
    },
    {
      title: "Особый статус сохранения",
      content: "Зубр включен в Красную книгу России и Международную Красную книгу со статусом «уязвимый вид». Охота на зубров строго запрещена.",
      icon: "BookMarked"
    },
    {
      title: "Социальные животные",
      content: "Зубры живут группами: смешанные стада из самок с молодняком и одиночные самцы, которые присоединяются к стаду только в период размножения.",
      icon: "UsersRound"
    }
  ];

  return (
    <section id="facts" className="py-16 bg-nature/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-dark mb-4">Интересные факты</h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Узнайте удивительные факты о зубрах и их жизни в Калужской области
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {facts.slice(0, 3).map((fact, index) => (
                <AccordionItem key={index} value={`fact-${index}`} className="border-dark/20">
                  <AccordionTrigger className="text-lg font-medium text-dark hover:text-accent">
                    <div className="flex items-center">
                      <div className="bg-dark/10 rounded-full p-2 mr-4">
                        <Icon name={fact.icon} className="h-5 w-5 text-dark" />
                      </div>
                      {fact.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dark/70 text-base pl-14">
                    {fact.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {facts.slice(3).map((fact, index) => (
                <AccordionItem key={index + 3} value={`fact-${index + 3}`} className="border-dark/20">
                  <AccordionTrigger className="text-lg font-medium text-dark hover:text-accent">
                    <div className="flex items-center">
                      <div className="bg-dark/10 rounded-full p-2 mr-4">
                        <Icon name={fact.icon} className="h-5 w-5 text-dark" />
                      </div>
                      {fact.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dark/70 text-base pl-14">
                    {fact.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="mt-12 bg-dark text-light p-6 rounded-lg max-w-3xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Icon name="BadgePlus" className="h-6 w-6 mr-2 text-accent" />
            Знаете ли вы?
          </h3>
          <p className="mb-4">
            В 2024 году численность зубров в Калужской области достигла исторического максимума - 
            более 120 особей, что составляет около 12% от всей российской популяции этих животных.
          </p>
          <p>
            Программа по восстановлению зубров в регионе признана одной из самых успешных в Европе 
            и продолжает развиваться при поддержке экологов и властей.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
