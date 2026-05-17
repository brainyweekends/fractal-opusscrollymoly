import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { TopicData } from "@/data/clusters";
import heroPortrait from "@/assets/hero-portrait.jpg";

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t, 0, 1);
}

function Essay() {
  return (
    <article className="essay-body pr-4 pb-20" style={{ maxWidth: "760px", margin: "0 auto" }}>
      <section className="essay-section mb-9">
        <h3 className="essay-heading">I. Origin</h3>
        <figure className="my-1 mb-5 float-right ml-7 w-40 md:w-56" style={{ shapeOutside: "border-box" } as React.CSSProperties}>
          <div className="relative overflow-hidden border border-border/30 bg-paper-deep" style={{ aspectRatio: "4/5" }}>
            <img src={heroPortrait} alt="Geetika Gehlot portrait" className="absolute inset-0 w-full h-full object-cover" />
            <span className="absolute inset-1 border border-paper/8 pointer-events-none" />
          </div>
          <figcaption className="mt-1.5 font-mono uppercase tracking-[0.2em] text-ink-soft/40" style={{ fontSize: "8px" }}>Montréal, 2024</figcaption>
        </figure>
        <p className="drop-cap">I was born in a city that does not sleep lightly. Rajasthan, India — sandstone and spice and a sky so wide it made ambition feel obligatory. My earliest memories are not of a classroom but of the space between things: between words in a conversation I was too young to join, between the notes of a raag my grandmother hummed while she cooked, between the lines of a physics problem my father was explaining to someone else that I absorbed from across the room.</p>
        <p>That space between things is where I have always lived. Not quite inside any single discipline, any single culture, any single language. The gap is not emptiness. It is where everything interesting happens.</p>
        <p>My family moved when I was young — first within India, then to Canada, to Montréal, a city whose own identity is built on productive tension between languages and traditions.</p>
      </section>
      <section className="essay-section mb-9 clear-both">
        <h3 className="essay-heading">II. Between Worlds</h3>
        <p>Moving between countries at a formative age rewires something. You stop assuming the way things are done where you grew up is the only way. You develop a permeability to context, an ability to read rooms that are not yours.</p>
        <p>I speak four languages: English, French, Hindi, and Marwari. Each one carries a different register of myself. English is where I think most precisely. French navigates the city. Hindi is where old memories arrive in intact sentences. Marwari is where I belong without explanation.</p>
        <p>Fluency in a culture is not just the language — it is the assumptions embedded in the grammar, the things people do not say because they do not have to. I grew up learning to find those load-bearing silences in more than one culture. It made me a better thinker, writer, and scientist.</p>
      </section>
      <section className="essay-section mb-9 clear-both">
        <h3 className="essay-heading">III. The Mind and Its Obsessions</h3>
        <p>If you asked me to identify the central obsession of my intellectual life, I would not give you a subject. I would give you a posture. I am obsessed with the moment when something that appeared complicated becomes, in the right frame, simple.</p>
        <p>Physics found me through my father, who treated it not as a subject but as a lens. Mathematics followed closely. Chess gave me something similar: the pleasure of thinking several moves ahead. The disciplines are different in almost every surface feature. The underlying skill is the same.</p>
        <p>Computer science arrived as a natural extension. I came to programming not to build apps but to build things that think. I taught myself React, TypeScript, Python. I built this site.</p>
      </section>
      <section className="essay-section mb-9 clear-both">
        <h3 className="essay-heading">IV. The Creative Life</h3>
        <p>The assumption that STEM and the arts are in competition has never matched my experience. The creativity required to design an experiment and to write a novel are not different in kind — different in material, identical in demand.</p>
        <p>I have been training in Hindustani classical vocal for years. Riyaaz is non-negotiable. A raag is a grammar — it specifies which notes are permitted, forbidden, emphasised. Within those constraints, improvisation is required.</p>
        <p>Writing is the other major strand. I am several volumes into a novel series — a world built over years with its own history, geography, and rules.</p>
      </section>
      <section className="essay-section mb-9 clear-both">
        <h3 className="essay-heading">V. What I Am Building</h3>
        <p>This site is an artifact. I built it from scratch — React, TypeScript, Vite, Tailwind — because I needed a structure that could hold the full picture. Every claim has evidence, every skill has a receipt, every curiosity has a paper trail.</p>
        <p>The FRC robotics team taught me what it means to build under pressure with a team counting on you. Twelve weeks of design, iteration, fabrication, testing, ending in competition — and learning to communicate across roles, between strategic vision and engineering constraints.</p>
      </section>
      <section className="essay-section mb-4 clear-both">
        <h3 className="essay-heading">VI. Where I Am Headed</h3>
        <p>I do not have a five-year plan. I have a model of what I want my work to look like: rigorous, interdisciplinary, evidence-based, built at the intersection of STEM and creative practice.</p>
        <p className="font-accent italic text-ink-soft/65 mt-5 text-[14px] border-l-2 border-gold/30 pl-4 clear-both">The dossier is the argument. Everything else on this site is the evidence.</p>
      </section>
    </article>
  );
}

function TopicCard({ topic, index, total, progress }: { topic: TopicData; index: number; total: number; progress: number }) {
  const [open, setOpen] = useState(false);
  const gap = 0.15;
  const start = index * gap;
  const local = clamp((progress - start) / (1 - start), 0, 1);
  const stack = (total - index - 1) * 14;
  const scale = 1 - (total - index - 1) * 0.03;
  const opacity = progress <= start ? 0 : lerp(0, 1, local);
  const y = lerp(stack, 0, local);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 w-full h-full text-left"
        style={{
          opacity,
          transform: `translate3d(0, ${y}px, 0) scale(${scale + (1 - scale) * local})`,
          transition: "transform 160ms linear, opacity 160ms linear",
          zIndex: index + 2,
          pointerEvents: progress > start ? "auto" : "none",
        }}
      >
        <div className="relative h-full w-full overflow-hidden border border-border bg-[hsl(220_30%_7%)] shadow-[0_20px_50px_-28px_hsl(220_90%_3%/0.8)]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-black/25" />
          <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
            <div className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.28em] text-gold/70">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>Open</span>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-4xl text-paper-contrast leading-tight mb-2">{topic.label}</h3>
              <p className="max-w-xl font-accent italic text-base md:text-lg text-paper-contrast-soft">{topic.blurb}</p>
            </div>
          </div>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-[hsl(220_30%_8%)] border border-border text-paper p-0 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono uppercase tracking-[0.3em] text-gold/60" style={{ fontSize: "9px" }}>{String(index + 1).padStart(2, "0")}</span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <DialogTitle className="font-display text-2xl md:text-3xl leading-tight text-paper-contrast">{topic.label}</DialogTitle>
            <p className="font-accent italic text-base text-paper-contrast-soft mt-2 mb-5">{topic.blurb}</p>
            <div className="h-px bg-border/30 mb-6" />
            <DialogDescription asChild>
              <div className="text-sm md:text-base leading-relaxed text-ink-soft font-display">
                {topic.detail.split("\n").map((para, i) => <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>)}
              </div>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function AboutCardStack({ topics }: { topics: TopicData[] }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 900);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    const onResize = () => setVh(window.innerHeight || 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const totalScroll = shellRef.current ? Math.max(1, shellRef.current.offsetHeight - vh) : 1;
  const t = clamp(scrollY / totalScroll, 0, 1);
  const essayProgress = clamp(t / 0.6, 0, 1);
  const cardProgress = clamp((t - 0.6) / 0.4, 0, 1);

  return (
    <section ref={shellRef} className="relative w-full" style={{ height: `${180 + topics.length * 120}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[hsl(220_30%_6%)]">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="container py-10 md:py-14">
            <div className="max-w-5xl mx-auto mb-8 text-center">
              <div className="font-mono uppercase tracking-[0.28em] text-gold/55" style={{ fontSize: "8px" }}>Personal Profile</div>
              <h2 className="font-display text-paper-contrast text-3xl md:text-5xl mt-3">Scroll the essay, then the cards stack.</h2>
            </div>
            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 items-start">
              <div className="rounded-[28px] border border-border bg-[hsl(220_30%_7%)] p-6 md:p-8 shadow-[0_20px_50px_-28px_hsl(220_90%_3%/0.7)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono uppercase tracking-[0.3em] text-gold/60" style={{ fontSize: "8px" }}>Essay</span>
                  <span className="flex-1 h-px bg-border/40" />
                </div>
                <div className="max-h-[74vh] overflow-y-auto pr-2 essay-scroll">
                  <Essay />
                </div>
              </div>

              <div className="relative h-[74vh] md:h-[76vh]">
                {topics.map((topic, index) => (
                  <TopicCard key={topic.slug} topic={topic} index={index} total={topics.length} progress={cardProgress} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
