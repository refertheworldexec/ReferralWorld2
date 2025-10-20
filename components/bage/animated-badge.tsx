import AnimatedBadge from "@/components/ui/animated-badge";

export function AnimatedBadgeDemo() {
  return (
    <div className="relative" suppressHydrationWarning>
      <AnimatedBadge
        text="Learn More..."
        color="#22d3ee"
        href="/docs/components/animated-badge"
      />
    </div>
  );
}
