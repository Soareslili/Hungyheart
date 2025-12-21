import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import type { FormEvent } from "react";




const Contact = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully! We'll get back to you soon.");
    };

    return (
        <section id="contact" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">
                        Contato
                    </h2>
                    <p className="text-secondary font-script text-2xl mb-4">
                        Adoraríamos ouvir de você
                    </p>
                    <p className="text-foreground/80 font-poppins">
                        Tem dúvidas ou pedidos especiais? Entre em contato conosco
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                  
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-3xl font-playfair text-foreground">
                            Envie-nos uma mensagem
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="font-poppins">Nome</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        required
                                        className="font-poppins"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-poppins">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        className="font-poppins"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="font-poppins">Telefone</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="font-poppins"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="font-poppins">Mensagem</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Conte-nos o que você está pensando..."
                                        rows={5}
                                        required
                                        className="font-poppins"
                                    />
                                </div>
                                <Button type="submit" variant="secondary" className="w-full font-poppins">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                
                    <div className="space-y-6">
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-playfair text-xl text-foreground mb-2">Localização</h3>
                                        <p className="font-poppins text-muted-foreground">
                                            123 Rua Culinária<br />
                                            Distrito Gourmet<br />
                                           Nova York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-playfair text-xl text-foreground mb-2">Telefone</h3>
                                        <p className="font-poppins text-muted-foreground">
                                            +1 (555) 123-4567<br />
                                            +1 (555) 987-6543
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-playfair text-xl text-foreground mb-2">Email</h3>
                                        <p className="font-poppins text-muted-foreground">
                                            info@hungyheart.com<br />
                                            reservations@hungyheart.com
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-playfair text-xl text-foreground mb-2">Horário</h3>
                                        <p className="font-poppins text-muted-foreground">
                                            Segunda - Sexta: 11:00 AM - 10:00 PM<br />
                                            Sábado - Domingo: 10:00 AM - 11:00 PM
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
