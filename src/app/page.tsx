import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  CheckSquare,
  Goal,
  ShieldCheck,
  Star,
  Waves,
  Youtube as YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CountdownTimer from "@/components/countdown-timer";
import YoutubePlayer from "@/components/youtube-player";
import TestimonialCard from "@/components/testimonial-card";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const CTA_URL = "#offer";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Logo />
      <Button asChild className="hidden sm:inline-flex">
        <Link href={CTA_URL}>Pegar Acesso</Link>
      </Button>
    </div>
  </header>
);

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center bg-gray-900 pt-16"
  >
    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
        ALCANCE A CONSISTÊNCIA QUE VOCÊ SEMPRE BUSCOU NO TRADING
      </h1>
      <p className="mt-4 max-w-3xl mx-auto font-body text-lg md:text-xl text-gray-200">
        Descubra a Estratégia Chinesa: O indicador que revela o momento exato
        para entrar e vencer em Opções Binárias no M1, sem usar Martingale.
      </p>
      <Button asChild size="lg" className="mt-8 text-lg font-bold">
        <Link href={CTA_URL}>
          👉 QUERO ACESSO IMEDIATO À ESTRATEGIA CHINESA
        </Link>
      </Button>
    </div>
  </section>
);

const problems = [
  "Você se sente perdido sem uma estratégia clara e lucrativa?",
  "Cansado de usar o Martingale e arriscar sua banca inteira?",
  "Frustrado por não conseguir identificar os melhores momentos de entrada?",
  "Já gastou dinheiro em cursos e indicadores que não funcionaram?",
];

const ProblemSection = () => (
  <section id="problems" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
        Se você se identifica com isso, você está no lugar certo.
      </h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Muitos traders enfrentam as mesmas dificuldades todos os dias.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => (
          <div key={index} className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 flex-shrink-0 text-primary mt-1" />
            <p className="text-left text-muted-foreground">{problem}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const solutionFeatures = [
  {
    icon: Waves,
    title: "Análise de Ondas",
    description:
      "Detecta os padrões de ondas do mercado para prever movimentos com alta precisão.",
  },
  {
    icon: CheckSquare,
    title: "Confirmação de Entrada",
    description:
      "Sinaliza o momento exato da entrada, eliminando dúvidas e hesitações.",
  },
  {
    icon: Goal,
    title: "Consistência e Segurança",
    description:
      "Opera sem a necessidade de Martingale, protegendo seu capital e garantindo lucros consistentes.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          A Solução Definitiva: Indicador ESTRATEGIA CHINESA
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
          Assista ao vídeo abaixo e veja como o indicador funciona na prática.
          É simples, direto e eficaz.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <YoutubePlayer videoId="1iAgu5fAod0" />
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        {solutionFeatures.map((feature, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <feature.icon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="mt-4 font-headline text-xl font-bold">
              {feature.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const benefits = [
  "Sinais claros e precisos para operações em M1.",
  "Estratégia validada sem o uso de Martingale.",
  "Ideal para iniciantes e traders experientes.",
  "Funciona em qualquer corretora de Opções Binárias.",
  "Acesso vitalício e suporte exclusivo.",
];

const BenefitsSection = () => (
  <section id="benefits" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Transforme seu Trading Agora Mesmo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Com a Estratégia Chinesa, você terá em mãos tudo o que precisa para
            alcançar a tão sonhada consistência no mercado.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Benefit illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            data-ai-hint="success profit"
          />
        </div>
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Mariana L.",
    location: "São Paulo, SP",
    image: "https://placehold.co/100x100.png",
    imageHint: "woman portrait",
    testimonial:
      "Depois de meses pulando de galho em galho, finalmente encontrei uma estratégia que funciona. O indicador é incrivelmente preciso e fácil de usar. Bati minha meta semanal em apenas dois dias!",
  },
  {
    name: "Ricardo P.",
    location: "Belo Horizonte, MG",
    image: "https://placehold.co/100x100.png",
    imageHint: "man portrait",
    testimonial:
      "Eu era cético no início, mas a Estratégia Chinesa superou todas as minhas expectativas. Sem Martingale, meu risco diminuiu e meus lucros aumentaram. Recomendo para qualquer um que queira levar o trading a sério.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
        O que nossos alunos estão dizendo
      </h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Resultados reais de pessoas que transformaram seu trading.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

const bonuses = [
  "Acesso a um grupo VIP no Telegram para networking e suporte.",
  "Planilha de gerenciamento de risco para proteger seu capital.",
  "Aulas bônus sobre mentalidade e controle emocional no trading.",
];

const OfferSection = () => (
  <section id="offer" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-primary">
        <CardHeader className="text-center bg-primary text-primary-foreground p-6 rounded-t-lg">
          <h2 className="font-headline text-3xl font-bold">
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </h2>
          <p className="text-lg opacity-90">
            O Acesso Imediato à Estratégia Chinesa está com um preço que não vai
            se repetir.
          </p>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-headline text-xl font-bold text-foreground">
                O que você vai receber:
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Indicador Estratégia Chinesa Vitalício
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Aulas de Instalação e Operação
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Suporte Exclusivo
                </li>
              </ul>
              <Separator className="my-6" />
              <h3 className="font-headline text-xl font-bold text-foreground">
                E ainda 3 bônus exclusivos:
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-background p-6 rounded-lg">
              <p className="text-muted-foreground">De <span className="line-through">R$497,00</span> por apenas:</p>
              <p className="font-headline text-4xl md:text-5xl font-bold text-primary my-2">
                12x de R$20,37
              </p>
              <p className="font-bold text-foreground">ou R$ 197,00 à vista</p>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full text-lg font-bold animate-pulse"
              >
                <Link href={CTA_URL}>
                  SIM, QUERO MEU ACESSO AGORA!
                </Link>
              </Button>
              <div className="mt-6">
                <p className="font-bold text-primary">A OFERTA TERMINA EM:</p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section id="guarantee" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Seu Risco é Zero!
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Temos tanta confiança na Estratégia Chinesa que oferecemos uma
            garantia incondicional. Se por qualquer motivo você não ficar
            satisfeito nos primeiros 30 dias, devolvemos 100% do seu dinheiro.
            Sem perguntas, sem burocracia.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <ShieldCheck className="h-48 w-48 text-primary opacity-20 absolute -top-4 -left-4" />
            <Image
              src="https://placehold.co/300x300.png"
              alt="30-day guarantee seal"
              width={300}
              height={300}
              className="rounded-full shadow-xl relative z-10"
              data-ai-hint="guarantee seal"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqs = [
  {
    question: "Preciso ter experiência para usar o indicador?",
    answer:
      "Não! A Estratégia Chinesa foi desenvolvida para ser simples e eficaz, servindo tanto para traders iniciantes quanto para os mais experientes que buscam uma ferramenta de alta assertividade.",
  },
  {
    question: "O indicador funciona em qualquer corretora?",
    answer:
      "Sim, o indicador é compatível com a plataforma MetaTrader 4 (MT4), que pode ser conectada à maioria das corretoras de Opções Binárias do mercado.",
  },
  {
    question: "O acesso é vitalício?",
    answer:
      "Sim! Ao adquirir a Estratégia Chinesa, você paga uma única vez e tem acesso vitalício ao indicador, a todas as aulas e futuras atualizações.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Você terá acesso ao nosso suporte exclusivo via Telegram e e-mail para tirar todas as suas dúvidas sobre a instalação e utilização do indicador.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-foreground">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible className="w-full mt-12">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg font-headline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const FinalCtaSection = () => (
  <section id="final-cta" className="py-20 md:py-32">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
        Você tem duas escolhas agora
      </h2>
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg">
          <h3 className="font-headline text-2xl font-bold text-muted-foreground">
            Opção 1: Não Fazer Nada
          </h3>
          <p className="mt-4 text-muted-foreground">
            Continuar buscando estratégias, perdendo tempo e dinheiro, e se
            frustrando com a falta de consistência.
          </p>
        </div>
        <div className="p-6 border-2 border-primary rounded-lg shadow-lg">
          <h3 className="font-headline text-2xl font-bold text-primary">
            Opção 2: Decisão Inteligente
          </h3>
          <p className="mt-4 text-foreground">
            Pegar um atalho, usar uma estratégia validada e alcançar a
            consistência que você sempre sonhou, com segurança e suporte.
          </p>
        </div>
      </div>
      <Button
        asChild
        size="lg"
        className="mt-12 text-xl font-bold animate-pulse"
      >
        <Link href={CTA_URL}>
          QUERO A DECISÃO INTELIGENTE!
        </Link>
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-8">
    <div className="container mx-auto px-4 text-center text-sm">
      <Logo />
      <p className="mt-4">
        © {new Date().getFullYear()} Estratégia Chinesa. Todos os direitos
        reservados.
      </p>
      <p className="mt-4 max-w-3xl mx-auto">
        <strong>Aviso Legal:</strong> Todas as estratégias e investimentos
        envolvem risco de perda. Nenhuma informação contida neste produto deve
        ser interpretada como uma garantia de resultados.
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
