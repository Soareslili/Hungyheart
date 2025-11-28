import { useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroImage1 from "../../assets/herorestaurant.png";
import heroImage2 from "../../assets/herorestaurant-2.png";
import heroImage3 from "../../assets/herorestaurant-3.png";


const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const slides = [
    {
      image: heroImage1,
      alt: "Elegant restaurant interior with natural lighting",
      title: "Exótico e Delicioso",
      subtitle: "Onde a arte culinária encontra momentos inesquecíveis",
    },
    {
      image: heroImage2,
      alt: "Upscale dining area with evening city views",
      title: "Uma Viagem de Sabores",
      subtitle: "Ingredientes selecionados, preparados com paixão",
    },
    {
      image: heroImage3,
      alt: "Luxurious restaurant with warm ambient lighting",
      title: "Elegância em cada mordida",
      subtitle: "Uma experiência gastronômica sofisticada",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const updateSlideIndicator = () => {
      const current = emblaApi.selectedScrollSnap();

      document.querySelectorAll("[data-slide-indicator]").forEach((indicator, index) => {
        if (index === current) {
          indicator.classList.add("text-secondary", "font-semibold", "text-lg");
          indicator.classList.remove("text-muted-foreground");
        } else {
          indicator.classList.remove("text-secondary", "font-semibold", "text-lg");
          indicator.classList.add("text-muted-foreground");
        }
      });

      const title = document.querySelector("[data-slide-title]");
      const subtitle = document.querySelector("[data-slide-subtitle]");

      if (title && subtitle) {
        title.textContent = slides[current].title;
        subtitle.textContent = slides[current].subtitle;
      }
    };

    emblaApi.on("select", updateSlideIndicator);
    updateSlideIndicator();

    return () => emblaApi.off("select", updateSlideIndicator);
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* ========= CAROUSEL ========= */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>

              {/* TEXTURE OVERLAY (gold grain elegância) */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/grain.png')] opacity-[0.12] mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ========= HERO CONTENT ========= */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          data-slide-title
          className="font-script text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 tracking-wide drop-shadow-lg transition-all"
        >
          Exótico e Delicioso
        </h1>

        <p
          data-slide-subtitle
          className="font-poppins text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mb-8 transition-all"
        >
          Onde a arte culinária encontra momentos inesquecíveis
        </p>

        {/* ======= CTA BUTTONS ======= */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <Link to="/reserve">
            <button className="bg-secondary hover:bg-secondary/90 cursor-pointer text-secondary-foreground px-10 py-4 text-lg font-poppins rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.03]">
              Reserve Sua Mesa
            </button>
          </Link>

          <Link to="/menu">
            <button className="border border-secondary text-secondary cursor-pointer px-10 py-4 text-lg font-poppins rounded-lg hover:bg-secondary/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.03]">
              Ver Menu
            </button>
          </Link>
        </div>
      </div>

      {/* ========= SLIDE INDICATORS ========= */}
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

    
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-secondary">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

   
    </section>
  );
};

export default Hero;
