import { Button } from "../../components/ui/button";
import chefImage from "../../assets/chefcooking.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>

   
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-5xl font-playfair font-bold text-foreground">
                Sobre Nós 
              </h2>
              <p className="text-secondary font-script text-2xl">
                Hungyheart cozinha comida como arte culinárias
              </p>
              <p className="text-foreground/80 font-poppins leading-relaxed">
                Os artistas culinários muitas vezes se inspiram em várias cozinhas, tradições culturais 
                e experiências pessoais para criar seus próprios pratos exclusivos. Eles prestam atenção 
                em cada detalhe, desde a seleção dos ingredientes até a disposição no prato.
              </p>
              <Link to="/menu">
                <Button className="bg-secondary cursor-pointer hover:bg-secondary/90 text-secondary-foreground px-8 font-poppins font-medium">
               Conheça nosso Menu
                </Button>
              </Link>
            </div>

         
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={chefImage}
                  alt="Chef preparing gourmet cuisine"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Badge Decorativa */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-4 border-secondary flex items-center justify-center bg-card">
                <div className="text-center">
                  <p className="text-secondary font-playfair font-bold text-xl">Baker's</p>
                  <p className="text-secondary font-playfair text-sm">Cafe &</p>
                  <p className="text-secondary font-playfair font-bold text-xl">Restaurant</p>
                </div>
              </div>

              {/* Decorações */}
              <svg className="absolute -bottom-6 -left-6 w-16 h-16 text-gold opacity-70"
                viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>

              <svg className="absolute -top-4 -right-4 w-12 h-12 text-secondary opacity-60"
                viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="4" r="2" />
                <circle cx="12" cy="20" r="2" />
                <circle cx="4" cy="12" r="2" />
                <circle cx="20" cy="12" r="2" />
                <circle cx="17" cy="7" r="1.5" />
                <circle cx="17" cy="17" r="1.5" />
                <circle cx="7" cy="7" r="1.5" />
                <circle cx="7" cy="17" r="1.5" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* ========= 2) NOSSA ESSÊNCIA ========= */}
      <section className="py-20 bg-border">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Title */}
          <h3 className="text-5xl font-playfair font-bold text-center text-foreground mb-6">
            Nossa Essência
          </h3>
          <p className="text-center text-secondary font-script max-w-2xl mx-auto mb-14">
            A alma do Hungryheart nasce da paixão pela gastronomia, dos detalhes que encantam 
            e da busca constante pela excelência.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-md hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="text-xl font-playfair text-foreground mb-2">Paixão e Dedicação</h4>
              <p className="text-muted-foreground font-poppins text-sm">
                Cada prato é criado com amor e intenção, transformando o comum em extraordinário.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-md hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="text-xl font-playfair text-foreground mb-2">Ingredientes Selecionados</h4>
              <p className="text-muted-foreground font-poppins text-sm">
                Utilizamos apenas ingredientes frescos e de procedência, garantindo sabor e qualidade.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-md hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="text-xl font-playfair text-foreground mb-2">Excelência em Cada Detalhe</h4>
              <p className="text-muted-foreground font-poppins text-sm">
                Da apresentação ao sabor, buscamos entregar uma experiência que inspire e encante.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========= 3) NOSSA HISTÓRIA (TIMELINE) ========= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          <h3 className="text-5xl font-playfair font-bold text-center text-foreground mb-10">
            Nossa História
          </h3>

          <div className="space-y-10 border-l border-border pl-8">

            <div>
              <span className="text-secondary font-playfair text-2xl">1998</span>
              <p className="text-foreground font-poppins mt-2">
                O início de tudo — uma pequena cozinha com um grande sonho: transformar comida em arte.
              </p>
            </div>

            <div>
              <span className="text-secondary font-playfair text-2xl">2005</span>
              <p className="text-foreground font-poppins mt-2">
                Reconhecimento regional e o primeiro prêmio de gastronomia pela excelência no sabor.
              </p>
            </div>

            <div>
              <span className="text-secondary font-playfair text-2xl">2018</span>
              <p className="text-foreground font-poppins mt-2">
                Nasce a cozinha autoral, trazendo vivências e técnicas internacionais ao nosso cardápio.
              </p>
            </div>

            <div>
              <span className="text-secondary font-playfair text-2xl">2023</span>
              <p className="text-foreground font-poppins mt-2">
                Expansão e reconhecimento internacional pela culinária contemporânea de alto padrão.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========= 4) DIFERENCIAIS GOURMET ========= */}
      <section className="py-24 bg-border">
        <div className="container mx-auto px-4 max-w-6xl">

          <h3 className="text-5xl font-playfair font-bold text-center text-foreground mb-12">
            Diferenciais Gourmet
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-card border border-border p-8 rounded-xl shadow-lg hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="font-playfair text-2xl text-secondary">Culinária Autoral</h4>
              <p className="text-muted-foreground font-poppins mt-3">
                Receitas exclusivas criadas por chefs premiados.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-lg hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="font-playfair text-2xl text-secondary">Ingredientes Premium</h4>
              <p className="text-muted-foreground font-poppins mt-3">
                Seleção rigorosa para garantir sabores inesquecíveis.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-lg hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="font-playfair text-2xl text-secondary">Ambiente Elegante</h4>
              <p className="text-muted-foreground font-poppins mt-3">
                Decoração acolhedora com toque contemporâneo.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-lg hover:shadow-amber-200 transition-all duration-300 text-center">
              <h4 className="font-playfair text-2xl text-secondary">Drinks Exclusivos</h4>
              <p className="text-muted-foreground font-poppins mt-3">
                Coquetéis autorais preparados por mixologistas especialistas.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default About;
