import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneInputCard from "@/components/PhoneInputCard";

const Index = () => {
  const [dialCode, setDialCode] = useState("62");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (newDialCode: string, newPhoneNumber: string) => {
    setDialCode(newDialCode);
    setPhoneNumber(newPhoneNumber);
  };

  const displayNumber = phoneNumber ? `+${dialCode} ${phoneNumber}` : `+${dialCode} ...`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-8 space-y-3">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Tired of saving numbers before chatting?
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Chat to WhatsApp
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-primary animate-pulse-soft">
            {displayNumber}
          </p>
        </div>

        <PhoneInputCard onPhoneChange={handlePhoneChange} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
