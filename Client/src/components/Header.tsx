import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-purple-400" />
            {/*will replace this with company logo*/}
            {/* <img
              src="../../images/bg-removed.png"
              alt="error"
              height={100}
              width={100}
            /> */}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-400 bg-clip-text text-transparent ">
              Mintzy
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("qa")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Q&A
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Waitlist
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("qa")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Q&A
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
