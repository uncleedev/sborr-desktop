import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/data";
import NavButton from "@/components/buttons/button-nav";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Sidebar() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen]);

  const toggleMenu = () => {
    if (!isSmallScreen) setIsMenuOpen((prev) => !prev);
  };

  const forcedCollapsed = isSmallScreen || !isMenuOpen;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: forcedCollapsed ? 68 : 294 }}
      exit={{ width: 0 }}
      transition={{ duration: 0.3 }}
      className={`h-full flex flex-col justify-between items-center bg-background round p-4 ${
        forcedCollapsed ? "w-[68px]" : "w-[294px]"
      }`}
    >
      {/* Header Section */}
      <div className="w-full flex flex-col gap-4">
        <div
          className={`w-full flex ${
            forcedCollapsed ? "flex-col" : "flex-row"
          } justify-between items-center border-b border-foreground/20 pb-4`}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            {!forcedCollapsed && (
              <div>
                <h1 className="text-4xl font-extrabold leading-none">
                  <span className="text-primary text-shadow-2xs text-shadow-foreground">S</span>
                  <span className="text-secondary text-shadow-2xs text-shadow-foreground">B</span>
                  <span className="text-primary text-shadow-2xs text-shadow-foreground">O</span>
                  <span className="text-secondary text-shadow-2xs text-shadow-foreground">R</span>
                  <span className="text-primary text-shadow-2xs text-shadow-foreground">R</span>
                </h1>
                <p className="text-[10px] font-medium text-foreground/50">
                  Municipality of Montalban
                </p>
              </div>
            )}

            {forcedCollapsed && (
              <Menu
                className="text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
                onClick={toggleMenu}
                size={24}
              />
            )}
          </div>

          {!forcedCollapsed && (
            <X
              className="text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
              onClick={toggleMenu}
              size={24}
            />
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavButton
              key={link.label}
              icon={link.icon}
              label={link.label}
              path={link.path}
              iconOnly={forcedCollapsed}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full flex flex-col items-center text-[10px] text-foreground/50 font-medium">
        {!forcedCollapsed ? (
          <>
            <p>Copyright © 2025</p>
            <p>Developed by EDCB TECH</p>
          </>
        ) : (
          <p className="text-2xl font-semibold">©</p>
        )}
      </div>
    </motion.div>
  );
}
