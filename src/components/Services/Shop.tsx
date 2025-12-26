import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import Coffe from '../../assets/Coffe.png'
import OliveOil from '../../assets/OliveOil.png'
import Spice from '../../assets/Spice.png'
import Chef from '../../assets/Chef.png'
import Cookware from '../../assets/Cookware.png'
import Recipe from '../../assets/Recipe.png'

const Shop = () => {
    const products = [
        {
            name: "Grãos de Café",
            description: "Grãos de café torrados premium do Brasil",
            price: "$18.99",
            image: Coffe,
        },
        {
            name: "Azeite Extra Virgem",
            description: "Azeite extra virgem da Itália",
            price: "$24.99",
            image: OliveOil,
        },
        {
            name: "Conjunto de Temperos",
            description: "Seleção gourmet de temperos para cozinhar",
            price: "$32.99",
            image: Spice,
        },
        {
            name: "Faca de Chef",
            description: "Faca profissional para cozinha",
            price: "$89.99",
            image: Chef,
        },
        {
            name: "Conjunto de Panelas",
            description: "Conjunto premium de panelas antiaderentes",
            price: "$149.99",
            image: Cookware,
        },
        {
            name: "Livro de Receitas",
            description: "Nossa coleção de receitas exclusivas",
            price: "$29.99",
            image: Recipe,
        },
    ];

    const handleAddToCart = (productName: string) => {
        toast.success(`${productName} adicionado ao carrinho!`);
    };

    return (
        <section id="shop" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
                        Loja
                    </h2>
                    <p className="text-secondary font-script text-2xl mb-4">
                        Leve o sabor para casa
                    </p>
                    <p className="text-foreground/80 font-poppins">
                        Descubra nossa coleção selecionada de ingredientes premium e itens essenciais de cozinha
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <Card key={index} className="bg-card border-border hover:border-secondary transition-all duration-300 overflow-hidden group">
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-playfair text-foreground">
                                    {product.name}
                                </CardTitle>
                                <CardDescription className="font-poppins">
                                    {product.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-secondary">{product.price}</span>
                                <Button
                                    variant="secondary"
                                    onClick={() => handleAddToCart(product.name)}
                                    className="font-poppins cursor-pointer"
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Adicionar ao Carrinho
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;