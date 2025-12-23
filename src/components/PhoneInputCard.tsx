import { useState, useRef, MouseEvent } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, Country } from "@/data/countries";

interface PhoneInputCardProps {
  onPhoneChange: (dialCode: string, phoneNumber: string) => void;
}

const PhoneInputCard = ({ onPhoneChange }: PhoneInputCardProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleCountryChange = (value: string) => {
    const country = countries.find((c) => c.code === value);
    if (country) {
      setSelectedCountry(country);
      onPhoneChange(country.dialCode, phoneNumber);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    onPhoneChange(selectedCountry.dialCode, value);
  };

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple-effect";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleStartChat = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    
    if (phoneNumber.length >= 6) {
      const fullNumber = `${selectedCountry.dialCode}${phoneNumber}`;
      setTimeout(() => {
        window.open(`https://wa.me/${fullNumber}`, "_blank", "noopener,noreferrer");
      }, 150);
    }
  };

  const isValidNumber = phoneNumber.length >= 6;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full max-w-md"
    >
      {/* Mouse-following glow effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />
      
      <Card className="relative w-full border-border bg-card/80 backdrop-blur-sm overflow-hidden">
        {/* Inner glow effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.08), transparent 40%)`,
          }}
        />
        
        <CardContent className="relative p-6 space-y-5">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Country Code</label>
            <Select
              value={selectedCountry.code}
              onValueChange={handleCountryChange}
            >
              <SelectTrigger className="w-full bg-secondary/50 backdrop-blur-sm border-border text-foreground">
                <SelectValue>
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{selectedCountry.flag}</span>
                    <span>
                      {selectedCountry.name} (+{selectedCountry.dialCode})
                    </span>
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-64">
                {countries.map((country) => (
                  <SelectItem
                    key={country.code}
                    value={country.code}
                    className="text-foreground hover:bg-secondary focus:bg-secondary"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <span>
                        {country.name} (+{country.dialCode})
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="812-345-678"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="pl-10 bg-secondary/50 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Enter the number without the leading zero.
            </p>
          </div>

          <Button
            ref={buttonRef}
            onClick={handleStartChat}
            disabled={!isValidNumber}
            className="relative w-full bg-primary hover:bg-whatsapp-hover text-primary-foreground font-semibold py-6 text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Chat on WhatsApp
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We don't store any phone numbers. This tool simply opens the official
            WhatsApp API link.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneInputCard;
