import { useState } from "react";
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

  const handleStartChat = () => {
    if (phoneNumber.length >= 6) {
      const fullNumber = `${selectedCountry.dialCode}${phoneNumber}`;
      window.open(`https://wa.me/${fullNumber}`, "_blank", "noopener,noreferrer");
    }
  };

  const isValidNumber = phoneNumber.length >= 6;

  return (
    <Card className="w-full max-w-md border-border bg-card">
      <CardContent className="p-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Country Code</label>
          <Select
            value={selectedCountry.code}
            onValueChange={handleCountryChange}
          >
            <SelectTrigger className="w-full bg-secondary border-border text-foreground">
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
              className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Enter the number without the leading zero.
          </p>
        </div>

        <Button
          onClick={handleStartChat}
          disabled={!isValidNumber}
          className="w-full bg-primary hover:bg-whatsapp-hover text-primary-foreground font-semibold py-6 text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};

export default PhoneInputCard;
