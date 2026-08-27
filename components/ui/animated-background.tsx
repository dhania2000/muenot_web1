export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Soft base wash so blobs blend into a premium gradient field */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-2/60 via-background to-surface/50" />

      {/* Drifting brand-colored aurora blobs */}
      <div
        className="animate-aurora-1 absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-aurora-2 absolute -right-[12%] top-[10%] h-[50vw] w-[50vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-aurora-3 absolute bottom-[-20%] left-[20%] h-[60vw] w-[60vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--primary-dark) 18%, transparent), transparent 70%)",
        }}
      />

      {/* Faint editorial grid for depth */}
      <div className="grid-lines absolute inset-0 opacity-40" />
    </div>
  );
}
