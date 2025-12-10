import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Shop from "./Shop";

const Menu = () => {
  const starters = [
    { name: "Caesar Salad", description: "Fresh romaine lettuce with parmesan and croutons", price: "$12" },
    { name: "French Onion Soup", description: "Caramelized onions with melted gruyère", price: "$10" },
    { name: "Bruschetta", description: "Grilled bread with tomatoes, garlic, and basil", price: "$9" },
    { name: "Shrimp Cocktail", description: "Fresh shrimp with tangy cocktail sauce", price: "$15" },
  ];

  const mains = [
    { name: "Grilled Salmon", description: "Fresh Atlantic salmon with herbs and lemon butter", price: "$28" },
    { name: "Ribeye Steak", description: "Premium aged beef with garlic butter", price: "$35" },
    { name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms", price: "$22" },
    { name: "Chicken Parmesan", description: "Breaded chicken with marinara and mozzarella", price: "$24" },
  ];

  const desserts = [
    { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$8" },
    { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$9" },
    { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$8" },
    { name: "Cheesecake", description: "New York style with berry compote", price: "$8" },
  ];

  const drinks = [
    { name: "Espresso", description: "Rich Italian coffee", price: "$4" },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$5" },
    { name: "Red Wine", description: "Selection of premium wines", price: "$8-15" },
    { name: "Cocktails", description: "House special cocktails", price: "$12" },
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
            Our Menu
          </h2>
          <p className="text-secondary font-script text-2xl mb-4">
            Delicious dishes crafted with passion
          </p>
          <p className="text-foreground/80 font-poppins">
            Experience our carefully curated selection of dishes prepared by our master chefs
          </p>
        </div>

        <Tabs defaultValue="starters" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted">
            <TabsTrigger value="starters" className="font-poppins">Starters</TabsTrigger>
            <TabsTrigger value="mains" className="font-poppins">Main Courses</TabsTrigger>
            <TabsTrigger value="desserts" className="font-poppins">Desserts</TabsTrigger>
            <TabsTrigger value="drinks" className="font-poppins">Drinks</TabsTrigger>
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