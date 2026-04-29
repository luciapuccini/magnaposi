import { Cable, Shield, Wrench, Zap } from "lucide-react";
import type { Dict } from "@/i18n";

const icons = [Zap, Wrench, Shield, Cable];

export function Benefits({ dict }: { dict: Dict }) {
	return (
		<section
			id="benefits"
			className="border-b border-border/60 bg-secondary/40"
		>
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
				<div className="max-w-2xl">
					<p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
						{dict.benefits.kicker}
					</p>
					<h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
						{dict.benefits.title}
					</h2>
				</div>

				<ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{dict.benefits.items.map((item, i) => {
						const Icon = icons[i % icons.length]!;
						return (
							<li
								key={item.title}
								className="flex flex-col rounded-xl border border-border bg-card p-6"
							>
								<span
									aria-hidden
									className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary"
								>
									<Icon className="size-4" />
								</span>
								<h3 className="mt-4 font-display text-base font-semibold text-foreground">
									{item.title}
								</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
									{item.body}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
