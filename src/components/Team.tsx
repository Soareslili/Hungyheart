import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ChefHat, UtensilsCrossed, Cookie, Coffee } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "Chef Executivo",
      icon: ChefHat,
      description: "25 anos de excelência culinária com experiência em estrela Michelin",
    },
    {
      name: "Sophie Laurent",
      role: "Sous Chef",
      icon: UtensilsCrossed,
      description: "Especialista em culinária francesa e combinações de sabores inovadoras",
    },
    {
      name: "Antonio Silva",
      role: "Chef de Confeitaria",
      icon: Cookie,
      description: "Chef de confeitaria premiada, especializada em sobremesas",
    },
    {
      name: "Emma Watson",
      role: "Barista e Mixologista",
      icon: Coffee,
      description: "Mestre em arte do café e coquetéis exclusivos",
    },
  ];

  return (
    <section id="team" className="py-20 bg-popover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
          Conheça Nossa Equipe
          </h2>
          <p className="text-secondary font-script text-2xl mb-4">
            Passionate culinary artists
          </p>
          <p className="text-foreground/80 font-poppins">
           Artistas culinários apaixonados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-secondary transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-12 h-12 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-poppins font-medium text-base">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground font-poppins text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;