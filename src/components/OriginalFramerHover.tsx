"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

const DEFAULT_FRAMER_URL = "https://framer.com/m/Project-Hover-Uvmu5n.js@oFClK2kmNWkdYSwPFB1Y";
const IMPORTMAP_ID = "framer-url-import-map";
const IMPORT_MAP = {
  imports: {
    react: "https://esm.sh/react@19.2.4?dev",
    "react/jsx-runtime": "https://esm.sh/react@19.2.4/jsx-runtime?dev",
    framer: "https://unpkg.com/framer@2.4.1?module",
    "framer-motion": "https://unpkg.com/framer-motion@10.16.16?module",
    "react-dom": "https://esm.sh/react-dom@19.2.4?dev",
  },
};

const IMPORT_REWRITE_MAP: Record<string, string> = {
  react: IMPORT_MAP.imports.react,
  "react/jsx-runtime": IMPORT_MAP.imports["react/jsx-runtime"],
  framer: IMPORT_MAP.imports.framer,
  "framer-motion": IMPORT_MAP.imports["framer-motion"],
  "react-dom": IMPORT_MAP.imports["react-dom"],
};

function ensureImportMap() {
  if (typeof document === "undefined") return;
  if (document.getElementById(IMPORTMAP_ID)) return;

  const script = document.createElement("script");
  script.id = IMPORTMAP_ID;
  script.type = "importmap";
  script.textContent = JSON.stringify(IMPORT_MAP);
  document.head.appendChild(script);
}

export interface OriginalFramerHoverProps {
  framerUrl?: string;
}

function rewriteImports(source: string) {
  const rewrite = (specifier: string) => IMPORT_REWRITE_MAP[specifier] ?? specifier;

  return source
    .replace(/from\s*(['"])(react(?:\/jsx-runtime)?|framer(?:-motion)?|react-dom)\1/g, (_, quote, specifier) => {
      return `from${quote}${rewrite(specifier)}${quote}`;
    })
    .replace(/import\s*\(\s*(['"])(react(?:\/jsx-runtime)?|framer(?:-motion)?|react-dom)\1\s*\)/g, (_, quote, specifier) => {
      return `import(${quote}${rewrite(specifier)}${quote})`;
    });
}

export default function OriginalFramerHover({ framerUrl }: OriginalFramerHoverProps) {
  const remoteUrl = framerUrl ?? DEFAULT_FRAMER_URL;
  const [ProjectHover, setProjectHover] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ensureImportMap();

    let isCancelled = false;
    let blobUrl: string | null = null;

    async function loadFramer() {
      try {
        const response = await fetch(remoteUrl);
        if (!response.ok) {
          throw new Error(`Framer module fetch failed: ${response.status}`);
        }

        const source = await response.text();
        const rewrittenSource = rewriteImports(source);
        const blob = new Blob([rewrittenSource], { type: "text/javascript" });
        blobUrl = URL.createObjectURL(blob);

        const module = await import(/* webpackIgnore: true */ blobUrl);
        const Loaded = module.default ?? module;

        if (!isCancelled) {
          setProjectHover(() => Loaded);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : String(err));
        }
      }
    }

    loadFramer();

    return () => {
      isCancelled = true;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-[680px] rounded-[40px] border border-red-300 bg-red-50 p-6 text-sm text-red-900">
        Unable to load Framer component: {error}
      </div>
    );
  }

  if (!ProjectHover) {
    return <div className="min-h-[680px] rounded-[40px] bg-slate-100" />;
  }

  const Component = ProjectHover;
  return (
    <div className="min-h-[680px] w-full overflow-hidden rounded-[40px] bg-transparent">
      <Component />
    </div>
  );
}
