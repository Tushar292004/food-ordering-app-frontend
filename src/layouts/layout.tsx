import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer"
import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
}

const layout = ({ children, showHero = false }: Props) => {

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}

export default layout;