import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const services = [
    { name: "Rédaction de Projets Agricoles", path: "/services" },
    { name: "Conseils Agronomiques", path: "/services" },
    { name: "Planification Agricole", path: "/services" },
    { name: "Formations Agricoles", path: "/services" },
    { name: "Suivi et Évaluation", path: "/services" },
    { name: "Vente de Poulet", path: "/services" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Dionewar Agro Services" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4">
              Cultivons l'excellence agricole ensemble
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:dionewaragroservices28@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                  dionewaragroservices28@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+221772552880" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +221 77 255 28 80
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Koutal-Kaolack</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1CYGVTEJk5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dionewar_agro_services?igsh=MTEwNnkxdWZid2Y5dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lamine-coura-ndong-457626225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@laminecourandong?_r=1&_t=ZM-91fQ5gXkQKh" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dionewar Agro Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
