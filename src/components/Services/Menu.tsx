import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Shop from "./Shop";

const Menu = () => {
  const starters = [
    { name: "Salada César", description: "Alface romana fresca com parmesão e croutons", price: "$12" },
    { name: "Sopa de Cebola", description: "Cebolas caramelizadas com queijo gruyère gratinado", price: "$10" },
    { name: "Bruschetta", description: "Pão grelhado com tomate, alho e manjericão", price: "$9" },
    { name: "Coquetel de Camarão", description: "Camarões frescos com molho coquetel", price: "$15" },
  ];

  const mains = [
    { name: "Salmão Grelhado", description: "Salmão do Atlântico grelhado com ervas e manteiga de limão", price: "$28" },
    { name: "Bife Ribeye", description: "Bife maturado com manteiga de alho", price: "$35" },
    { name: "Risoto de Cogumelos", description: "Risoto cremoso de arroz arborio com cogumelos silvestres", price: "$22" },
    { name: "Frango à Parmegiana", description: "Frango empanado com molho marinara e mussarela", price: "$24" },
  ];

  const desserts = [
    { name: "Tiramisu", description: "Clássica sobremesa italiana com café e mascarpone", price: "$8" },
    { name: "Bolo de Chocolate (Lava)", description: "Bolo de chocolate quente com centro cremoso", price: "$9" },
    { name: "Crème Brûlée", description: "Creme de baunilha com cobertura de açúcar caramelizado", price: "$8" },
    { name: "Cheesecake", description: "Estilo Nova Iorque com compota de frutas vermelhas", price: "$8" },
  ];

  const drinks = [
    { name: "Espresso", description: "Café expresso italiano", price: "$4" },
    { name: "Cappuccino", description: "Expresso com leite vaporizado e espuma", price: "$5" },
    { name: "Vinho Tinto", description: "Seleção de vinhos premium", price: "$8-15" },
    { name: "Coquetéis", description: "Coquetéis especiais da casa", price: "$12" },
  ];

  const MenuSection = ({ items }: { items: typeof starters }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-secondary transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl font-playfair text-foreground">{item.name}</CardTitle>
              <span className="text-secondary font-bold text-lg">{item.price}</span>
            </div>
            <CardDescription className="font-poppins text-muted-foreground">
              {item.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );




  return (
   
  
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-secondary font-script text-2xl mb-4">
            Pratos deliciosos feitos com paixão
          </p>
          <p className="text-foreground/80 font-poppins">
            Experimente nossa seleção cuidadosamente elaborada de pratos preparados pelos nossos chefs
          </p>
        </div>

        <Tabs defaultValue="starters" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted">
            <TabsTrigger value="starters" className="font-poppins">Entradas</TabsTrigger>
            <TabsTrigger value="mains" className="font-poppins">Pratos Principais</TabsTrigger>
            <TabsTrigger value="desserts" className="font-poppins">Sobremesas</TabsTrigger>
            <TabsTrigger value="drinks" className="font-poppins">Bebidas</TabsTrigger>
          </TabsList>
          <TabsContent value="starters">
            <MenuSection items={starters} />
          </TabsContent>
          <TabsContent value="mains">
            <MenuSection items={mains} />
          </TabsContent>
          <TabsContent value="desserts">
            <MenuSection items={desserts} />
          </TabsContent>
          <TabsContent value="drinks">
            <MenuSection items={drinks} />
          </TabsContent>
        </Tabs>
      </div>

      <Shop />
    </section>

    

   
  );
};

export default Menu;