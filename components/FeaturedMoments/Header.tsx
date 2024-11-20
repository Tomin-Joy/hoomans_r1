interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={className}>
      <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 animate-fade-up">
        Featured Moments
      </h2>
      <p
        className="text-gray-600 animate-fade-up max-w-xl"
        style={{ animationDelay: "200ms" }}
      >
        Our experiences reflect our distinct ethos and core values, highlighting
        the very best each of our homes offers.
      </p>
    </div>
  );
}
