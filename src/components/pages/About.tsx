import { Button } from "../../components/ui/button";
import chefImage from "../../assets/chefcooking.png"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <h2 className="text-5xl font-playfair font-bold text-foreground">
                            About Us
                        </h2>
                        <p className="text-secondary font-script text-2xl">
                            Hungyheart cooks food as a culinary Art
                        </p>
                        <p className="text-foreground/80 font-poppins leading-relaxed">
                            Culinary artists often take inspiration from various cuisines, cultural traditions, and personal experiences to create their own signature dishes. They pay attention to every detail, from the selection of ingredients to the arrangement on the plate.
                        </p>
                        <Link to="/reserve">
                            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 font-poppins font-medium">
                                Reserve Sua Mesa
                            </Button>
                        </Link>
                    </div>

                    {/* Image with Decorative Elements */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={chefImage}
                                alt="Chef preparing gourmet cuisine"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-4 border-secondary flex items-center justify-center bg-card">
                            <div className="text-center">
                                <p className="text-secondary font-playfair font-bold text-xl">Baker's</p>
                                <p className="text-secondary font-playfair text-sm">Cafe &</p>
                                <p className="text-secondary font-playfair font-bold text-xl">Restaurant</p>
                            </div>
                        </div>

                        {/* Decorative Element - Star */}
                        <svg
                            className="absolute -bottom-6 -left-6 w-16 h-16 text-gold opacity-70"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>

                        {/* Decorative Element - Flower */}
                        <svg
                            className="absolute -top-4 -right-4 w-12 h-12 text-secondary opacity-60"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
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

    );
};

export default About;
