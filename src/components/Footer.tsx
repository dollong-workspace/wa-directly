const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm mb-2">
          © 2026 WA Directly. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Privacy
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
