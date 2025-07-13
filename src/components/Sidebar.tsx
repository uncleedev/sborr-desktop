import { navLinks } from "@/constants/data";
import { Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import { useState } from "react";
import { motion } from "motion/react";

export default function Sidebar() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: isMenuOpen ? 294 : 68 }}
      exit={{ width: 0 }}
      transition={{ duration: 0.3 }}
      className={` ${isMenuOpen ? "w-[294px]" : "w-[68px]"} flex flex-col justify-between items-center bg-background shadow shadow-ring rounded-[8px] p-4`}
    >
      <div className="w-full flex flex-col gap-4">
        <div className={`w-full ${isMenuOpen ? "flex-row" : "flex-col"} flex justify-between items-center border-b border-foreground/20 pb-4`}>
          <div className="">
            <div className={`${isMenuOpen ? "block" : "hidden"}`}>
              <h1 className="text-4xl font-extrabold">
                <span className="text-primary text-shadow-2xs text-shadow-foreground">S</span>
                <span className="text-secondary text-shadow-2xs text-shadow-foreground">B</span>
                <span className="text-primary text-shadow-2xs text-shadow-foreground">O</span>
                <span className="text-secondary text-shadow-2xs text-shadow-foreground">R</span>
                <span className="text-primary text-shadow-2xs text-shadow-foreground">R</span>
              </h1>
              <p className="text-[10px] font-medium text-foreground/50">Municipality of Montalban</p>
            </div>

            <Menu 
              className={`${isMenuOpen ? "hidden" : "block"} text-foreground/50 hover:text-foreground transition-colors cursor-pointer`}
              onClick={() => setIsMenuOpen(true)}
              height={24} 
              width={24}
            />
          </div>

          
          
          <X  
            height={24} 
            width={24}
            className={`${isMenuOpen ? "block" : "hidden"} text-foreground/50 hover:text-foreground transition-colors cursor-pointer`}
            onClick={() => setIsMenuOpen(false)} 
          />
        </div>

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
      
      
      <div className={`${isMenuOpen ? "block" : "hidden"} w-full flex flex-col items-center justify-between`}>
        <p className="text-foreground/50 text-[10px] font-medium">Copyright © 2025 </p>
        <p className="text-foreground/50 text-[10px]">Developed by EDCB TECH</p>
      </div>

      <p className={` ${isMenuOpen ? "hidden" : "block"} text-2xl font-semibold text-foreground/50`}>©</p>
    </motion.div>
  )
}
