// app/impressum/page.tsx
import React from "react";

export default function ImpressumPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-neutral-200 bg-neutral-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="space-y-2 text-neutral-400">
        <p>
          <strong>Angaben gemäß §5 TMG:</strong>
        </p>
        <p>Paul Schaper</p>
        <p>Im Rehmen 20</p>
        <p>29358 Eicklingen</p>

        <p className="mt-4">
          <strong>Kontakt:</strong>
        </p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:pschaper18@gmail.com"
            className="text-blue-400 underline"
          >
            pschaper18@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
