import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { images } from '@/img/portfolioimg';
import { useState } from 'react';

export default function ToyProjectConts() {
    const { slug } = useParams<{ slug: string }>();
    console.log(slug)

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const [projectNum, setProjectNum] = useState(1);

  const ProjectConts = () => {
    return(
      <>
      <section className="container grid gap-4 lg:grid-cols-1">
        <div className="grid gap-8">
          <div className="space-y-6">      
            <h1 className="font-display text-4xl text-foreground md:text-5xl">
              PORTFOLIO
            </h1>

            <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
              지금 보고 계신 이 웹페이지는 이렇게 만들어졌습니다!
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                Skills used
              </p>
              <div className="flex flex-wrap gap-3">                
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    React
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    TypeScript
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    Builder.io
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    github
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    lucide-react
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    vite
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    tailwind css
                  </span>
              </div>
            </div>
          </div>         
        </div>
      </section>
     
      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          How to build
        </h2>
        <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Design & Publishing
        </span>        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>
              <li className="flex gap-4">                
                  {/*<img src={images.image4} style={{width:"50%", height:"50%"}}/>
                  <span>프롬프트 입력</span>                
                 <ArrowRight className="h-3.5 w-3.5" />
                <img src={images.image1}/>                
                <img src={images.image3}/>                */}
              </li>              
          </ul>
        </div>
        
        <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Edit Code
        </span>        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">내용삽입</p>
              </li>
              <li className="flex gap-4">                
                  
                  <span>프롬프트 입력</span>              
              </li>              
          </ul>
        </div>

         <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Hosting
        </span>        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">Github 업로드를 이용한 호스팅</p>
              </li>
              <li className="flex gap-4">                                  
                  <span>프롬프트 입력</span>              
              </li>              
          </ul>
        </div>        
      </section>



      <section className="container grid gap-4 lg:grid-cols-1">
        <div className="grid gap-8">
          <div className="space-y-6">      
            <h1 className="font-display text-4xl text-foreground md:text-5xl">
              BAND SCRAPING PROGRAM
            </h1>

            <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
              네이버 밴드 스크래핑 프로그램
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                Skills used
              </p>
              <div className="flex flex-wrap gap-3">                
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    PYTHON
                  </span>                  
              </div>
            </div>
          </div>         
        </div>
      </section>
     
      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          How to work
        </h2>
           
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>
              <li className="flex gap-4">                
                  <img src={images.image5}/>
                  <span>프롬프트 입력</span>               
                 <ArrowRight className="h-3.5 w-3.5" />
                <img src={images.image6}/>                
                <img src={images.image7}/>                
              </li>              
          </ul>
        </div>
      </section>

      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          What I Learned
        </h2>
           
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>                        
          </ul>
        </div>
      </section>

      <section className="container grid gap-4 lg:grid-cols-1">
        <div className="grid gap-8">
          <div className="space-y-6">      
            <h1 className="font-display text-4xl text-foreground md:text-5xl">
              SPIDER GAME
            </h1>

            <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
              스파이더 게임
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                Skills used
              </p>
              <div className="flex flex-wrap gap-3">                
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    REACT
                  </span>                  
              </div>
            </div>
          </div>         
        </div>
      </section>
     
      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          How to work
        </h2>
           
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>                  
          </ul>
        </div>
      </section>

      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          What I Learned
        </h2>
           
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>                        
          </ul>
        </div>
      </section>

      
      </>
    )
  }

  return (
    <article className="space-y-20 pb-24">
      <section className="container space-y-10 pt-20 md:pt-10">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/60">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
          <span className="rounded-full border border-border/70 px-4 py-2 text-[0.65rem] font-semibold text-foreground/60">
            Project Detail
          </span>
           <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/60">
              <Link to="/toyProject/Portfolio">
                <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                  Portfolio
                </span>
              </Link>
              <Link to="/toyProject/BandScraping">
                <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                  Band Scraping Program
                </span>
              </Link>
              <Link to="/toyProject/Spidergame">
                <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                  Spider Game
                </span>
              </Link>
            </div>         
        </div>        
      </section>

      {ProjectConts()}
    </article>
  );

  {/*return (
    <article className="space-y-24 pb-24">
      <section className="container space-y-10 pt-20 md:pt-10">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/60">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
          <span className="rounded-full border border-border/70 px-4 py-2 text-[0.65rem] font-semibold text-foreground/60">
            Project Detail
          </span>
        </div>
        <div className="grid gap-8">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/60">
              <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                Toy Project1
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                Toy Project2
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-semibold text-secondary-foreground">
                Toy Project3
              </span>
            </div>

            <h1 className="font-display text-4xl text-foreground md:text-5xl">
              PORTFOLIO
            </h1>

            <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
              
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                Skills used
              </p>
              <div className="flex flex-wrap gap-3">                
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    React
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    TypeScript
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    Builder.io
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    github
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    lucide-react
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    vite
                  </span>
                  <span                    
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    tailwind css
                  </span>
              </div>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/70 bg-card/80 p-8 shadow-glow">
            <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              Project links
            </h2>
            <ul className="space-y-3">
              
                <li>
                  <a
                    href=''
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-full items-center justify-between rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    link.label
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              
            </ul>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-sm text-primary">
              Curious how this could look for your product? I’d love to tailor a
              creative spike—just send over your brief.
            </div>
          </aside>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          Contribution
        </h2>
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/80 p-10 shadow-glow">
          <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
            Contribution
          </h2>
          <ul className="space-y-5">
            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/70" />
                <p className="text-base text-foreground/70">contribution</p>
                <ul className="space-y-2">                  
                    <li className="flex gap-4">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/10" />
                      <p className="text-base text-foreground/70">contribution</p>
                    </li>                  
                </ul>
              </li>
            
          </ul>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-border/70 bg-card/80 p-10 shadow-glow">
            <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              What I developed
            </h2>
            <ul className="mt-6 space-y-4">              
                <li className="flex gap-3 text-sm text-foreground/70">
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                  <span>contribution</span>
                </li>              
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/80 p-10 shadow-glow">
            <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              Collaborate with me
            </h2>
            <p className="mt-4 text-sm text-foreground/65">
              I’m exploring partnerships with founders and product teams who value
              meticulous craft. Share your roadmap and I’ll assemble a sprint
              plan tailored to your goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@jangyeyoung.dev"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-brand"
              >
                Start a conversation
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://cal.com/jangyeyoung/intro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-5 py-2 text-sm font-semibold text-foreground/80"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-4 lg:grid-cols-1">
        <h2 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
          How to build
        </h2>

        <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Design & Publishing
        </span>
        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱</p>
              </li>
              <li className="flex gap-4">                
                  <img src={images.image4} style={{width:"50%", height:"50%"}}/>
                  <span>프롬프트 입력</span>                
                 <ArrowRight className="h-3.5 w-3.5" />
                <img src={images.image1}/>                
                <img src={images.image3}/>                
              </li>              
          </ul>
        </div>
        
        <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Edit Code
        </span>        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">내용삽입</p>
              </li>
              <li className="flex gap-4">                
                  <img src={images.image2} style={{width:"50%", height:"50%"}}/>
                  <span>프롬프트 입력</span>              
              </li>              
          </ul>
        </div>

         <span className="inline-flex items-center gap-2 px-4 py-2 text-l font-semibold uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Hosting
        </span>        
        <div className="space-y-8 rounded-3xl border border-border/70 bg-card/20 p-10 shadow-glow">
          <ul className="space-y-2">            
              <li className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <p className="text-base text-foreground/70">Github 업로드를 이용한 호스팅</p>
              </li>
              <li className="flex gap-4">                
                  <img src={images.image2} style={{width:"50%", height:"50%"}}/>
                  <span>프롬프트 입력</span>              
              </li>              
          </ul>
        </div>
        
      </section>
     
        <section className="container space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                More playful explorations
              </p>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Continue browsing the archive.
              </h2>
            </div>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
            >
              Back to toy projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            
              <Link                
                to={`/projects/`}
                className="group relative flex h-full flex-col rounded-3xl border border-border/70 bg-card/80 p-7 shadow-glow transition-transform duration-500 hover:-translate-y-2 hover:border-primary/50"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
                  <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    year
                  </span>
                  <ArrowRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  name
                </h3>
                <p className="mt-3 text-sm text-foreground/65">summary</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  
                    <span                      
                      className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70"
                    >
                      skill
                    </span>
                  
                </div>
              </Link>
            
          </div>
        </section>
      

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-accent/25 to-background p-12 shadow-glow md:p-16">
          <div className="absolute inset-0 bg-card-gloss opacity-80" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">
                Let’s collaborate
              </p>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Have a vision? Let’s prototype it together.
              </h2>
              <p className="text-sm text-foreground/65">
                I blend rapid prototyping with production-ready engineering. Share
                your challenge and I’ll align on a roadmap within days.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@jangyeyoung.dev"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand"
              >
                hello@jangyeyoung.dev
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/jangyeyoung"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-6 py-3 text-sm font-semibold text-foreground/80"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );*/}
}
