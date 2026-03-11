"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
    >
      <input
        type="email"
        placeholder="Your email"
        required
        className="flex-1 min-w-0 rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
