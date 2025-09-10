import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada! ✉️",
      description: "Entraremos em contato em breve.",
      duration: 4000,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Paulista, 1000\nSão Paulo - SP, 01310-100',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@starbucks.com.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Domingo\n7h às 22h',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Estamos aqui para ajudar! Envie sua mensagem e responderemos em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="card-gradient shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                        className="hover-lift"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="hover-lift"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Qual é o assunto?"
                      className="hover-lift"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Digite sua mensagem aqui..."
                      className="hover-lift resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero"
                    className="w-full text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="hover-lift hover-glow card-gradient border-0 shadow-soft animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-starbucks-green flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <Card className="animate-fade-in card-gradient border-0 shadow-medium">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-starbucks-green to-starbucks-green-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Nossa Localização</p>
                    <p className="text-sm opacity-90">Av. Paulista, 1000 - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ or Additional Info */}
            <Card className="animate-fade-in card-gradient border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Dúvidas Frequentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Qual o prazo de resposta?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Respondemos todas as mensagens em até 24 horas úteis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Posso fazer pedidos por aqui?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Para pedidos, utilize nosso sistema de carrinho online ou visite nossa loja.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Fazem entrega?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sim! Entregamos em toda a região metropolitana de São Paulo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
