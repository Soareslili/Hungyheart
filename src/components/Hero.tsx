import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroImage1 from "../assets/hero-restaurant.png";
import heroImage2 from "../assets/hero-restaurant-2.png";
import heroImage3 from "../assets/hero-restaurant-3.png";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const slides = [
    { 
      image: heroImage1, 
      alt: "Elegant restaurant interior with natural lighting",
      title: "Exótico e Delicioso",
      subtitle: "Onde a arte culinária encontra momentos inesquecíveis"
    },
    { 
      image: heroImage2, 
      alt: "Upscale dining area with evening city views",
      title: "Uma Viagem de Sabores",
      subtitle: "Experimente os melhores ingredientes elaborados com paixão"
    },
    { 
      image: heroImage3, 
      alt: "Luxurious restaurant with warm ambient lighting",
      title: "Elegância em cada mordida",
      subtitle: "Delicie-se com uma experiência gastronômica sofisticada"
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const updateSlideIndicator = () => {
      const current = emblaApi.selectedScrollSnap();
      
      // Update indicators
      document.querySelectorAll('[data-slide-indicator]').forEach((indicator, index) => {
        if (index === current) {
          indicator.classList.add('text-secondary', 'font-semibold', 'text-lg');
          indicator.classList.remove('text-muted-foreground');
        } else {
          indicator.classList.remove('text-secondary', 'font-semibold', 'text-lg');
          indicator.classList.add('text-muted-foreground');
        }
      });

      // Update text content
      const titleElement = document.querySelector('[data-slide-title]');
      const subtitleElement = document.querySelector('[data-slide-subtitle]');
      
      if (titleElement && subtitleElement) {
        titleElement.textContent = slides[current].title;
        subtitleElement.textContent = slides[current].subtitle;
      }
    };

    emblaApi.on('select', updateSlideIndicator);
    updateSlideIndicator();

    return () => {
      emblaApi.off('select', updateSlideIndicator);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/80" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 
          data-slide-title
          className="font-script text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 animate-fade-in transition-opacity duration-700"
        >
          Exotic and Delicious
        </h1>
        <p 
          data-slide-subtitle
          className="font-poppins text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl animate-fade-in transition-opacity duration-700"
        >
          Where culinary artistry meets unforgettable moments
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-20 flex flex-col space-y-4">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            data-slide-indicator
            onClick={() => scrollTo(index)}
            className="font-poppins text-sm transition-all duration-300 text-muted-foreground"
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
};


export default Hero;
