import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://www.instagram.com/inacioelealcontabilidade/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram size={22} className="text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/5548991706163"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-medium p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={22} className="text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
