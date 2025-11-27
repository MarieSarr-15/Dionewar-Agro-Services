import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/221772552880", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-24 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A]"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;


