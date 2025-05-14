
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const images = [
  {
    src: "https://images.unsplash.com/photo-1619447998047-7262aea5f001?q=80&w=1854&auto=format&fit=crop",
    alt: "Зубр в поле",
    caption: "Зубр в естественной среде обитания"
  },
  {
    src: "https://images.unsplash.com/photo-1541291468254-7a127db06e01?q=80&w=1770&auto=format&fit=crop",
    alt: "Зубр в лесу",
    caption: "Дикий зубр в лесном массиве"
  },
  {
    src: "https://images.unsplash.com/photo-1692701274366-4125c513d203?q=80&w=1854&auto=format&fit=crop",
    alt: "Стадо зубров",
    caption: "Семейная группа зубров"
  },
  {
    src: "https://images.unsplash.com/photo-1605539585527-4cdabe870e31?q=80&w=1974&auto=format&fit=crop",
    alt: "Зубр зимой",
    caption: "Зубр в зимний период"
  },
  {
    src: "https://images.unsplash.com/photo-1609132718044-5ab0309d8b1c?q=80&w=1974&auto=format&fit=crop",
    alt: "Молодой зубр",
    caption: "Молодая особь зубра"
  },
  {
    src: "https://images.unsplash.com/photo-1650353675388-0a71c0ef0a1f?q=80&w=1770&auto=format&fit=crop",
    alt: "Зубр крупным планом",
    caption: "Портрет зубра"
  }
];

const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="gallery" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-light mb-4">Галерея</h2>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Фотографии величественных зубров в их естественной среде обитания
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <Carousel 
            className="max-w-5xl mx-auto"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                          />
                        </AspectRatio>
                        <div className="absolute bottom-0 left-0 right-0 bg-dark/70 backdrop-blur-sm p-4 text-light">
                          <p className="text-lg">{image.caption}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-dark bg-accent hover:bg-accent/80" />
            <CarouselNext className="text-dark bg-accent hover:bg-accent/80" />
          </Carousel>
          
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-accent" : "bg-light/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((image, index) => (
            <div key={index} className="animate-on-scroll">
              <AspectRatio ratio={1/1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md transition-all duration-300 hover:shadow-xl hover:brightness-110 cursor-pointer"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
