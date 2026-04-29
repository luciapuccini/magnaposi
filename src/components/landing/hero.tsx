import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Dict } from "@/i18n";

export function Hero({ dict }: { dict: Dict }) {
	return (
		<section className="relative overflow-hidden border-b border-border/60">
			<div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
			<div
				aria-hidden
				className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background"
			/>

			<div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 md:items-center md:gap-8 md:py-20 lg:py-24">
				<div className="md:col-span-6">
					<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
						<span aria-hidden className="size-1.5 rounded-full bg-accent" />
						{dict.hero.eyebrow}
					</p>

					<h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
						{dict.hero.title}
					</h1>

					<p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						{dict.hero.subtitle}
					</p>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
						<a
							href="#contact"
							className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-colors hover:bg-primary/90"
						>
							{dict.hero.primaryCta}
							<ArrowRight aria-hidden className="size-4" />
						</a>
						<a
							href="#how"
							className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
						>
							{dict.hero.secondaryCta}
						</a>
					</div>
				</div>

				<div className="md:col-span-6">
					<div className="relative aspect-3/2 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
						<img
							src="/tank2.png"
							alt={dict.hero.imageAlt}
							width={428}
							height={289}
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute bottom-3 left-3 rounded-md border border-border bg-background/90 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur">
							SM-500T
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
