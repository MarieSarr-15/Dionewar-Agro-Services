import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Calendar, BookOpen, CheckCircle, ArrowRight, Award, Target, Heart, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: FileText,
      title: "Rédaction de Projets Agricoles",
      description: "Documents professionnels et convaincants pour vos initiatives agricoles",
    },
    {
      icon: Users,
      title: "Conseils Agronomiques",
      description: "Expertise technique pour optimiser vos rendements et pratiques",
    },
    {
      icon: Calendar,
      title: "Planification Agricole",
      description: "Stratégies sur mesure pour une agriculture durable et rentable",
    },
    {
      icon: BookOpen,
      title: "Formations Agricoles",
      description: "Développement des compétences avec nos programmes spécialisés",
    },
    {
      icon: CheckCircle,
      title: "Suivi et Évaluation",
      description: "Accompagnement continu pour assurer le succès de vos cultures",
    },
    {
      icon: ShoppingCart,
      title: "Vente de Poulet",
      description: "Poulets de chair de qualité supérieure pour vos besoins",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/accueil.jpeg"
            alt="Agriculture moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Cultivons l'excellence agricole ensemble
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Votre partenaire de confiance pour des solutions agricoles innovantes et durables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Qui sommes-nous ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Dionewar Agro Services est votre partenaire de confiance pour transformer vos ambitions agricoles 
                  en réussites durables. Avec notre expertise en agronomie et notre approche centrée sur l'innovation, 
                  nous accompagnons producteurs, investisseurs et porteurs de projets vers l'excellence agricole.
                </p>
                <Button asChild variant="default">
                  <Link to="/about">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins agricoles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                Voir tous nos services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à développer votre projet agricole ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
            comment nous pouvons vous accompagner vers le succès.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link to="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
