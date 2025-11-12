import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'services', 'about', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioItems: { id: number; category: string; image?: string }[] = [];

  const services = [
    {
      category: 'Макияж',
      items: [
        { name: 'Дневной макияж', description: 'Естественный образ для повседневной жизни, деловых встреч', price: 'от 3 000 ₽', duration: '60 мин' },
        { name: 'Вечерний макияж', description: 'Яркий акцентный макияж для вечерних выходов и мероприятий', price: 'от 4 500 ₽', duration: '90 мин' },
        { name: 'Свадебный макияж', description: 'Стойкий безупречный образ невесты, включая пробный макияж', price: 'от 7 000 ₽', duration: '120 мин' },
        { name: 'Макияж для фотосессии', description: 'Специальный макияж с учетом освещения и камеры', price: 'от 5 000 ₽', duration: '90 мин' },
      ]
    },
    {
      category: 'Дополнительные услуги',
      items: [
        { name: 'Коррекция и окрашивание бровей', description: 'Придание формы и цвета бровям', price: 'от 1 500 ₽', duration: '30 мин' },
        { name: 'Наращивание ресниц', description: 'Классическое или объемное наращивание', price: 'от 2 500 ₽', duration: '120 мин' },
        { name: 'Выездное обслуживание', description: 'Работа на дому у клиента или на площадке', price: '+2 000 ₽', duration: '—' },
      ]
    },
    {
      category: 'Обучение',
      items: [
        { name: 'Индивидуальный мастер-класс', description: 'Обучение техникам макияжа, подбор косметики', price: 'от 5 000 ₽', duration: '120 мин' },
        { name: 'Групповой урок (2-4 человека)', description: 'Мастер-класс для небольшой группы', price: 'от 3 500 ₽/чел', duration: '150 мин' },
      ]
    }
  ];

  const reviews = [
    { name: 'Екатерина М.', text: 'Потрясающий профессионал! Макияж держался весь день, выглядел естественно и в то же время очень празднично. Все гости спрашивали контакты визажиста.', rating: 5 },
    { name: 'Анна К.', text: 'Делала свадебный макияж. Результат превзошел все ожидания! Чувствовала себя королевой. Очень благодарна за терпение и профессионализм.', rating: 5 },
    { name: 'Мария Л.', text: 'Прекрасный мастер своего дела. Всегда учитывает пожелания, дает советы. Теперь обращаюсь только сюда!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-serif font-bold tracking-wide">
              ВИЗАЖИСТ
            </h1>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'Обо мне' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Создаю образы,<br />которые вдохновляют
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональный макияж для любого случая. 10+ лет опыта, международные сертификаты, индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('services')} size="lg" className="bg-accent hover:bg-accent/90">
                  Услуги и цены
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-secondary flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="Image" size={48} className="mx-auto mb-2" />
                  <p>Добавьте фото</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-serif font-bold">10+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground">Примеры моих работ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-serif text-xl font-semibold">{item.category}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Услуги и цены</h2>
            <p className="text-muted-foreground">Полный прайс-лист с описанием</p>
          </div>

          <div className="space-y-8">
            {services.map((category, idx) => (
              <Card key={idx} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="bg-accent/10 p-6 border-b">
                  <h3 className="text-2xl font-serif font-semibold">{category.category}</h3>
                </div>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((service, index) => (
                      <AccordionItem key={index} value={`item-${idx}-${index}`}>
                        <AccordionTrigger className="px-6 hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center justify-between w-full pr-4">
                            <span className="font-medium text-left">{service.name}</span>
                            <span className="text-accent font-semibold">{service.price}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-2 text-muted-foreground">
                            <p>{service.description}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Clock" size={16} />
                              <span>Длительность: {service.duration}</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <Icon name="Info" size={16} className="inline mr-2" />
              Все цены указаны ориентировочно. Итоговая стоимость зависит от сложности работы и используемых материалов. Консультация и подбор образа — бесплатно.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl bg-secondary flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Image" size={48} className="mx-auto mb-2" />
                <p>Добавьте фото</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Обо мне</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Профессиональный визажист с 10-летним опытом работы. Прошла обучение в ведущих школах макияжа Москвы и Санкт-Петербурга.
                </p>
                <p>
                  Работаю с косметикой премиум-класса: MAC, NARS, Tom Ford, Charlotte Tilbury. Имею международные сертификаты и регулярно повышаю квалификацию на мастер-классах ведущих визажистов.
                </p>
                <p>
                  Моя философия — подчеркнуть естественную красоту, создать гармоничный образ, который будет соответствовать вашему стилю и событию.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-serif font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-serif font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Свадебных образов</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-serif font-bold text-accent mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Сертификатов</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-serif font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Премиум косметика</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground">Что говорят мои клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь со мной для записи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">makeup@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Instagram" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <p className="text-muted-foreground">@makeup_artist</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Записаться на консультацию</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о желаемом образе или событии" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Визажист. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;