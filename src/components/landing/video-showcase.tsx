import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/i18n";

export function VideoShowcase({ dict }: { dict: Dict }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.videoShowcase.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.videoShowcase.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.videoShowcase.subtitle}
          </p>
        </div>

        <div
          ref={wrapperRef}
          className="mt-10 overflow-hidden rounded-xl border border-border shadow-lg"
        >
          {ready ? (
            <video
              controls
              preload="none"
              playsInline
              poster="/magnaposi-poster.webp"
              className="w-full"
            >
              <source src="/magnaposi-demo.webm" type="video/webm" />
              <source src="/magnaposi-demo.mp4" type="video/mp4" />
              <track kind="captions" />
            </video>
          ) : (
            <img
              src="/magnaposi-poster.webp"
              alt=""
              aria-hidden
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
