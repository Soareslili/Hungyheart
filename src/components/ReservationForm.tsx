import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calendar } from "lucide-react";


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.persons || !formData.date || !formData.time) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Table reserved successfully! We'll send you a confirmation shortly.");
    setFormData({ name: "", persons: "", date: "", time: "" });
  };

  return (
    <section id="reservation" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-script font-bold mb-4 text-foreground">
           Reserve sua mesa
          </h2>
          <p className="text-secondary font-poppins mb-12">
          Reserve uma mesa com antecedência para aproveitar seu tempo com amigos e família.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-left block text-foreground font-poppins text-sm">
              Seu Nome
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ex. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="persons" className="text-left block text-foreground font-poppins text-sm">
               Número de Pessoas
              </Label>
              <Select
                value={formData.persons}
                onValueChange={(value) => setFormData({ ...formData, persons: value })}
              >
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-left block text-foreground font-poppins text-sm">
             Data
              </Label>
              <div className="relative">
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-input border-border text-foreground"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" size={18} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-left block text-foreground font-poppins text-sm">
            Hora
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-4">
              <Button
                type="submit"
                className="w-full md:w-auto px-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-poppins font-medium"
              >
              Reserve Uma Mesa
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
