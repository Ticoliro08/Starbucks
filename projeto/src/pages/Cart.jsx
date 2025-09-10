import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId, productName) => {
    removeItem(productId);
    toast({
      title: "Produto removido",
      description: `${productName} foi removido do seu carrinho.`,
      duration: 2000,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Pedido realizado! 🎉",
      description: `Seu pedido de R$ ${total.toFixed(2)} foi confirmado.`,
      duration: 4000,
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Que tal explorar nosso delicioso menu?
            </p>
            <Link to="/menu">
              <Button size="lg" variant="hero">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explorar Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Seu Carrinho
          </h1>
          <p className="text-muted-foreground animate-slide-up">
            {itemCount} {itemCount === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <Card key={item.id} className="animate-fade-in hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-lg font-bold text-starbucks-green mt-2">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="hover-lift"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="hover-lift"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="animate-scale-in card-gradient shadow-medium">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Resumo do Pedido
                </h2>
                
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-starbucks-green">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    variant="hero"
                    className="w-full text-lg py-6"
                  >
                    Finalizar Pedido
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Link to="/menu" className="block">
                    <Button variant="outline" className="w-full hover-lift">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-fade-in">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  onClick={() => {
                    clearCart();
                    toast({
                      title: "Carrinho limpo",
                      description: "Todos os itens foram removidos.",
                      duration: 2000,
                    });
                  }}
                  className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Limpar Carrinho
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
