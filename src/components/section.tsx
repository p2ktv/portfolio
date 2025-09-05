"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { t, type Language } from "@/lib/i18n";

type SectionProps = {
  titleKey: string;
  children: React.ReactNode;
  language: Language;
  defaultOpen?: boolean;
};

export default function CollapsibleSection({
  titleKey,
  children,
  language,
  defaultOpen = true,
}: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl font-semibold">{t(language, titleKey)}</h2>
        {open ? (
          <ChevronUp className="w-5 h-5 text-neutral-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-400" />
        )}
      </div>
      <div className={`mt-4 overflow-visible`}>{open && children}</div>
    </section>
  );
}
