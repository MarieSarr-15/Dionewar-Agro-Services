import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Users, Calendar, BookOpen, CheckCircle, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Rédaction de Projets Agricoles",
      subtitle: "Des documents professionnels qui font la différence",
      image: "/redaction.jpeg",
      description: "Nous vous accompagnons dans la conception et la rédaction de projets agricoles complets et convaincants.",
      features: [
        "Études de faisabilité détaillées",
        "Plans d'affaires structurés",
        "Dossiers de financement optimisés",
        "Analyses de marché approfondies",
        "Projections financières réalistes",
      ],
    },
    {
      icon: Users,
      title: "Conseils Agronomiques Experts",
      subtitle: "L'expertise au service de vos cultures",
      image: "/conseil agronomique.jpeg",
      description: "Bénéficiez de l'expertise de nos agronomes pour optimiser vos pratiques culturales et maximiser vos rendements.",
      features: [
        "Diagnostic agronomique de vos parcelles",
        "Recommandations techniques personnalisées",
        "Gestion intégrée des cultures",
        "Optimisation des intrants agricoles",
        "Conseils en protection des cultures",
      ],
    },
    {
      icon: Calendar,
      title: "Planification Agricole Stratégique",
      subtitle: "Anticipez et réussissez vos campagnes",
      image: "/planification.jpeg",
      description: "Élaborez des stratégies agricoles durables avec nos services de planification sur mesure.",
      features: [
        "Calendriers culturaux optimisés",
        "Rotation des cultures adaptée",
        "Planification des ressources",
        "Gestion des saisons agricoles",
        "Stratégies d'assolement efficaces",
      ],
    },
    {
      icon: BookOpen,
      title: "Formations Agricoles Professionnelles",
      subtitle: "Développez vos compétences agricoles",
      image: "/formation agricole.jpeg",
      description: "Participez à nos programmes de formation conçus pour améliorer vos compétences et adopter les meilleures pratiques.",
      features: [
        "Formation aux techniques modernes",
        "Ateliers pratiques sur le terrain",
        "Modules de formation certifiants",
        "Formation à l'agroécologie",
        "Renforcement des capacités techniques",
      ],
    },
    {
      icon: CheckCircle,
      title: "Suivi et Évaluation des Cultures",
      subtitle: "Un accompagnement continu pour votre succès",
      image: "/Suivi et evaluation.jpeg",
      description: "Assurez le succès de vos cultures avec notre service de suivi et d'évaluation régulier.",
      features: [
        "Visites techniques régulières",
        "Monitoring de la croissance",
        "Évaluation des performances",
        "Rapports d'avancement détaillés",
        "Ajustements et recommandations",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Vente de Poulet",
      subtitle: "Poulets de chair de qualité supérieure",
      image: "/elevage et vente poulet.jpeg",
      description: "Découvrez notre élevage de poulets de chair et bénéficiez de produits de qualité pour vos besoins.",
      features: [
        "Poulets de chair élevés avec soin",
        "Qualité supérieure garantie",
        "Disponibilité régulière",
        "Prix compétitifs",
        "Service de livraison disponible",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Des solutions complètes et professionnelles pour répondre à tous vos besoins agricoles
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                          {service.title}
                        </h2>
                        <p className="text-accent font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Intéressé par nos services ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
