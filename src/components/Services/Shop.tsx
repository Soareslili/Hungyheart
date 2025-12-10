import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Shop = () => {
    const products = [
        {
            name: "Coffee Beans",
            description: "Premium roasted coffee beans from Brazil",
            price: "$18.99",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Olive Oil",
            description: "Extra virgin olive oil from Italy",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1604908811920-3c981b0c8a43?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Spice Collection",
            description: "Gourmet spice set for cooking",
            price: "$32.99",
            image: "https://images.unsplash.com/photo-1587049352851-fcde36d188cd?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Chef's Knife",
            description: "Professional kitchen knife set",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1585238342028-9801dc543a03?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Cookware Set",
            description: "Premium non-stick cooking pans",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1585238342014-fd43a69ca56d?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Recipe Book",
            description: "Our signature recipes collection",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
        },
    ];

    const handleAddToCart = (productName: string) => {
        toast.success(`${productName} added to cart!`);
    };

    return (
        <section id="shop" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
                        Shop
                    </h2>
                    <p className="text-secondary font-script text-2xl mb-4">
                        Bring the taste home
                    </p>
                    <p className="text-foreground/80 font-poppins">
                        Discover our curated collection of premium ingredients and kitchen essentials
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
                                    className="font-poppins"
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
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