import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Coffee, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:", 
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <Coffee className="h-24 w-24 mx-auto text-starbucks-green mb-4" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-starbucks-green">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
          Oops! A página que você está procurando não existe. Que tal voltar para casa e explorar nosso menu?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="hover-lift">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline" size="lg" className="hover-lift">
              <Coffee className="mr-2 h-5 w-5" />
              Ver Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
