import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center gap-2">
        <img src={logo} alt="WA Directly Logo" className="w-8 h-8 object-contain" />
        <span className="text-lg font-semibold text-foreground">WA Directly</span>
      </div>
    </header>
  );
};

export default Header;
