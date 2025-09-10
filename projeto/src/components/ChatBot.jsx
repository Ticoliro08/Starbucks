import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Olá! 👋 Sou o assistente virtual do Starbucks. Como posso ajudá-lo hoje?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('preço') || message.includes('valor') || message.includes('custa')) {
      return 'Nossos preços variam de R$ 6,90 (cookies) até R$ 24,90 (frappuccinos especiais). Você pode ver todos os preços detalhados em nosso menu!';
    }
    
    if (message.includes('horário') || message.includes('funciona') || message.includes('aberto')) {
      return 'Funcionamos de segunda a domingo, das 7h às 22h. Estamos sempre aqui para servir o melhor café para você! ☕';
    }
    
    if (message.includes('entrega') || message.includes('delivery')) {
      return 'Sim! Fazemos entregas em toda a região metropolitana de São Paulo. Você pode fazer seu pedido online e receber em casa! 🚚';
    }
    
    if (message.includes('café') || message.includes('coffee')) {
      return 'Temos uma seleção incrível de cafés! Desde o clássico Americano até nossos especiais como Macchiato Caramelo. Qual tipo de café você prefere? ☕';
    }
    
    if (message.includes('frappuccino') || message.includes('gelada') || message.includes('fria')) {
      return 'Nossos frappuccinos são perfeitos para se refrescar! Recomendo o Frappuccino Caramelo ou Chocolate. Ambos são deliciosos! 🥤';
    }
    
    if (message.includes('sobremesa') || message.includes('doce') || message.includes('cookie')) {
      return 'Nossas sobremesas são irresistíveis! Temos croissants de chocolate, muffins de blueberry, cheesecake e cookies. Perfeitas para acompanhar seu café! 🍪';
    }
    
    if (message.includes('localização') || message.includes('endereço') || message.includes('onde')) {
      return 'Estamos localizados na Av. Paulista, 1000 - São Paulo, SP. Um local super acessível no coração da cidade! 📍';
    }
    
    if (message.includes('obrigad') || message.includes('valeu') || message.includes('tchau')) {
      return 'Foi um prazer ajudar! Volte sempre que precisar. Esperamos você em breve para degustar nossos cafés especiais! ☕️✨';
    }
    
    if (message.includes('oi') || message.includes('olá') || message.includes('hello')) {
      return 'Olá! Bem-vindo ao Starbucks! 😊 Estou aqui para ajudar com informações sobre nossos produtos, preços, horários e muito mais. O que você gostaria de saber?';
    }
    
    return 'Entendi sua pergunta! Para informações específicas sobre nossos produtos, preços e serviços, recomendo explorar nosso menu ou entrar em contato conosco. Posso ajudar com algo mais específico? 😊';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full btn-gradient shadow-strong animate-bounce-gentle hover:scale-110 transition-transform duration-300"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-strong animate-scale-in card-gradient border-0">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-starbucks-green text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Assistente Starbucks
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-starbucks-green text-white'
                        : 'bg-secondary text-secondary-foreground'
                    } animate-fade-in`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot ? (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-starbucks-green text-white p-3 rounded-lg animate-pulse">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                  className="hover-lift"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
