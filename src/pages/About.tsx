import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Nous visons la plus haute qualité dans tous nos services et accompagnements.",
    },
    {
      icon: Heart,
      title: "Engagement",
      description:
        "Nous nous engageons pleinement auprès de nos clients pour leur réussite.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Nous adoptons les meilleures pratiques agricoles modernes et durables.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Découvrez l'histoire, la mission et les valeurs qui font de Dionewar Agro
            Services votre partenaire privilégié dans l'excellence agricole.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Notre Histoire
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch mt-4">
              <div className="flex items-center justify-center rounded-lg p-8 h-[650px]">
                <div className="text-center">
                  <img
                    src={logo}
                    alt="Dionewar Agro Services Logo"
                    className="h-96 w-auto mx-auto drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="prose prose-lg max-w-none flex flex-col justify-center h-[650px]">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dionewar Agro Services est née d'une passion profonde pour l'agriculture
                  et d'une vision claire : rendre l'excellence agricole accessible à tous.
                  Fondée par M.Lamine Coura Ndong, agronome de formation , notre entreprise
                  s'est développée pour devenir un acteur incontournable dans le
                  développement agricole durable. Grâce à une expertise du terrain et un
                  engagement constant, nous accompagnons depuis plusieurs années des
                  producteurs, investisseurs et porteurs de projets à travers tout le
                  pays.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Au fil du temps, Dionewar Agro Services a élargi ses services afin de
                  répondre aux besoins croissants du secteur : conception de projets,
                  formation agricole, suivi et évaluation des cultures, planification
                  stratégique, et bien plus encore. Notre objectif est clair : apporter des
                  solutions concrètes, innovantes et adaptées afin d'assurer la réussite
                  et la rentabilité de chaque initiative agricole.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui, nous poursuivons notre mission avec détermination, en
                  soutenant la modernisation du secteur agricole sénégalais tout en
                  promouvant des pratiques respectueuses de l'environnement et durables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="h-12 w-12 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Notre Mission
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Accompagner les acteurs du secteur agricole vers l'excellence en
                  fournissant des services de conseil, de formation et de suivi de haute
                  qualité. Nous nous engageons à promouvoir des pratiques agricoles
                  durables qui respectent l'environnement tout en maximisant la
                  productivité et la rentabilité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="h-12 w-12 text-accent" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Notre Vision
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le partenaire de référence en Afrique de l'Ouest pour
                  l'innovation et l'excellence agricole, tout en contribuant à la
                  transformation durable du secteur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Dionewar Agro Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Pourquoi choisir Dionewar Agro Services ?
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    Expertise Agronomique Reconnue
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fondé et dirigé par Lamine Coura Ndong, agronome expérimenté qui maîtrise 
                    les techniques agricoles modernes et les pratiques durables. Nous combinons 
                    savoir-faire traditionnel et innovations pour des résultats optimaux.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    Accompagnement Personnalisé
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Chaque projet est unique. Nous adaptons nos services à vos besoins 
                    spécifiques, en tenant compte de votre contexte local, de vos ressources 
                    et de vos objectifs pour un accompagnement sur mesure.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    Résultats Concrets et Mesurables
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous nous engageons à fournir des résultats tangibles. Nos projets 
                    sont conçus pour maximiser la productivité, la rentabilité et la 
                    durabilité de vos activités agricoles.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    Expérience du Terrain
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fort d'une expérience pratique approfondie sur le terrain, nous comprenons 
                    les réalités et défis du secteur agricole sénégalais. Cette connaissance 
                    approfondie nous permet de proposer des solutions adaptées et efficaces 
                    pour vos projets agricoles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
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

export default About;
