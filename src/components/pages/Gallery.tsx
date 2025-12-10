import { useState } from "react";
import { Dialog, DialogContent } from "../../components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Using placeholder images with restaurant-related Unsplash photos
  const images = [
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop", alt: "Gourmet dish presentation" },
    { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop", alt: "Fresh ingredients" },
    { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop", alt: "Restaurant ambiance" },
    { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&fit=crop", alt: "Fine dining table setting" },
    { url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop", alt: "Culinary creation" },
    { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop", alt: "Delicious pizza" },
    { url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop", alt: "Fresh salad bowl" },
    { url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop", alt: "Healthy breakfast" },
    { url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=600&h=600&fit=crop", alt: "Premium dessert presentation" },
    { url: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=600&fit=crop", alt: "Fine dining pasta dish" },
    { url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=600&fit=crop", alt: "Romantic dining setup" },
    { url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=600&fit=crop", alt: "Gourmet steak dish" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">''
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-secondary font-script text-2xl mb-4">
            A visual feast for your eyes
          </p>
          <p className="text-foreground/80 font-poppins">
            Explore our collection of beautifully crafted dishes and elegant atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-poppins text-sm">View Image</span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;