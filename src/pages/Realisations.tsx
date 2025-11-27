import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Realisations = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const realisations = [
    {
      title: "Formation sur les techniques maraîchères",
      lieu: "Keur Niene Wolof",
      image: "/maraichere keur niene.jpeg",
      category: "formation",
    },
    {
      title: "Formation sur les techniques maraîchères",
      lieu: "Kaolack",
      image: "/maraichere kaolack.jpeg",
      category: "formation",
    },
    {
      title: "Formation sur les techniques de pépinières maraîchères",
      lieu: "Medina Leytï",
      image: "/pepeniere maraichere.jpeg",
      category: "formation",
    },
    {
      title: "Formation sur l'étude de marché",
      lieu: "Keur Socé",
      image: "/etude de marche.jpeg",
      category: "formation",
    },
    {
      title: "Formation sur la planification agricole",
      lieu: "Keur Socé",
      image: "/planificationagricole keur soce.jpeg",
      category: "formation",
    },
    {
      title: "Élevage et vente de Poulet de Chair",
      lieu: "Koutal",
      image: "/elevage et vente poulet.jpeg",
      category: "production",
    },
    {
      title: "Production de Gombo",
      lieu: "Koutal ",
      image: "/production gombo.jpeg",
      category: "production",
    },
    {
      title: "Production de Poivrons 🫑",
      lieu: "Koutal",
      image: "/production poivrons.jpeg",
      category: "production",
    },
    {
      title: "Expérimentation sur la production de papaye",
      lieu: "Koutal",
      image: "/production papaye.jpeg",
      category: "production",
    },
    {
      title: "Expérimentation sur la production de bananes",
      lieu: "Koutal",
      image: "/banane.jpeg",
      category: "production",
    },
    {
      title: "Rédaction d'un projet de production d'œuf de consommation",
      lieu: "",
      image: "/production oeuf et consommation.jpeg",
      category: "redaction",
    },
    {
      title: "Rédaction d'un projet de Production de piment",
      lieu: "",
      image: "/redaction production piment.jpeg",
      category: "redaction",
    },
    {
      title: "Rédaction d'un projet de production de papaye avec Dabakh Agro Business",
      lieu: "",
      image: "/redaction production de papaye.jpeg",
      category: "redaction",
    },
  ];

  const filteredRealisations = activeFilter === "all" 
    ? realisations 
    : realisations.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Découvrez nos projets et formations réalisés à travers le Sénégal
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              size="lg"
            >
              Tous
            </Button>
            <Button
              variant={activeFilter === "formation" ? "default" : "outline"}
              onClick={() => setActiveFilter("formation")}
              size="lg"
            >
              Formation
            </Button>
            <Button
              variant={activeFilter === "production" ? "default" : "outline"}
              onClick={() => setActiveFilter("production")}
              size="lg"
            >
              Production
            </Button>
            <Button
              variant={activeFilter === "redaction" ? "default" : "outline"}
              onClick={() => setActiveFilter("redaction")}
              size="lg"
            >
              Rédaction
            </Button>
          </div>
        </div>
      </section>

      {/* Réalisations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRealisations.map((realisation, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                    {realisation.title}
                  </h3>
                  {realisation.lieu && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{realisation.lieu}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Realisations;

