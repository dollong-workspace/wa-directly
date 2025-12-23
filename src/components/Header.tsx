import { MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
          <MessageSquare className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-foreground">ChatDirect</span>
      </div>
    </header>
  );
};

export default Header;
