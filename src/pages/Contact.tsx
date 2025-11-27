import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Nouveau contact depuis le site web:\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with phone number
    window.open(`https://wa.me/221772552880?text=${encodedMessage}`, '_blank');
    
    toast.success("Message préparé ! Envoyez-le via WhatsApp.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions et discuter de vos projets agricoles
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nos Coordonnées</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                N'hésitez pas à nous contacter par email, téléphone ou WhatsApp. 
                Notre équipe est disponible pour répondre à vos questions et vous accompagner 
                dans vos projets agricoles.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                      <a
                        href="mailto:dionewaragroservices28@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        dionewaragroservices28@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Téléphone </h3>
                      <a
                        href="tel:+221772552880"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        77 255 28 80
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Localisation</h3>
                      <p className="text-muted-foreground">Koutal-Kaolack</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground">Lundi au Vendredi : 9h - 18h</p>
                      <p className="text-muted-foreground">Samedi : 9h - 13h</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Votre nom complet *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Votre téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisir un service *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="redaction">Rédaction de Projets Agricoles</SelectItem>
                          <SelectItem value="conseils">Conseils Agronomiques</SelectItem>
                          <SelectItem value="planification">Planification Agricole</SelectItem>
                          <SelectItem value="formations">Formations Agricoles</SelectItem>
                          <SelectItem value="suivi">Suivi et Évaluation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Votre message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Demandez un devis gratuit et sans engagement pour vos besoins en services agricoles
          </p>
          <Button asChild size="lg">
            <a href="mailto:dionewaragroservices28@gmail.com">Demander un devis</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
