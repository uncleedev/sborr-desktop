import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/data";
import NavButton from "./NavButton";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: isMenuOpen ? 294 : 68 }}
      exit={{ width: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col justify-between items-center bg-background shadow shadow-ring rounded-[8px] p-4 ${
        isMenuOpen ? "w-[294px]" : "w-[68px]"
      }`}
    >
      {/* Header Section */}
      <div className="w-full flex flex-col gap-4">
        <div
          className={`w-full flex ${
            isMenuOpen ? "flex-row" : "flex-col"
          } justify-between items-center border-b border-foreground/20 pb-4`}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            {isMenuOpen && (
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

            {!isMenuOpen && (
              <Menu
                className="text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
                onClick={toggleMenu}
                size={24}
              />
            )}
          </div>

          {isMenuOpen && (
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
              iconOnly={!isMenuOpen}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full flex flex-col items-center text-[10px] text-foreground/50 font-medium">
        {isMenuOpen ? (
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
