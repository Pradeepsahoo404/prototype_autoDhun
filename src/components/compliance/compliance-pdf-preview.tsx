"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";

import { cn } from "@/lib/utils";

type PdfJsModule = typeof import("pdfjs-dist");

let pdfjsReady: Promise<PdfJsModule> | null = null;

function loadPdfJs() {
  if (!pdfjsReady) {
    pdfjsReady = import("pdfjs-dist").then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      return pdfjs;
    });
  }
  return pdfjsReady;
}

export function CompliancePdfPreview({ slug, className }: { slug: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let pdfDoc: PDFDocumentProxy | null = null;

    async function render() {
      setStatus("loading");
      setPageCount(0);

      const container = containerRef.current;
      if (!container) return;
      container.innerHTML = "";

      try {
        const pdfjs = await loadPdfJs();
        const task = pdfjs.getDocument(`/api/compliance-pdf?slug=${encodeURIComponent(slug)}`);
        pdfDoc = await task.promise;

        if (cancelled) return;

        setPageCount(pdfDoc.numPages);

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum += 1) {
          if (cancelled) break;

          const page = await pdfDoc.getPage(pageNum);
          const baseViewport = page.getViewport({ scale: 1 });
          const maxWidth = Math.min(container.clientWidth || 900, 900);
          const scale = maxWidth / baseViewport.width;
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.className = "compliance-pdf-page";
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.setAttribute("role", "img");
          canvas.setAttribute("aria-label", `Page ${pageNum} of ${pdfDoc.numPages}`);

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          await page.render({ canvasContext: ctx, viewport }).promise;

          if (!cancelled) container.appendChild(canvas);
        }

        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    render();

    return () => {
      cancelled = true;
      pdfDoc?.destroy();
    };
  }, [slug]);

  return (
    <div className={cn("compliance-pdf-preview", className)}>
      {status === "loading" ? (
        <p className="compliance-pdf-preview-status">Loading preview…</p>
      ) : null}
      {status === "error" ? (
        <p className="compliance-pdf-preview-status text-amber-400/90">
          Preview could not be loaded. Use Download PDF below.
        </p>
      ) : null}
      {status === "ready" && pageCount > 0 ? (
        <p className="compliance-pdf-preview-meta">{pageCount} page{pageCount === 1 ? "" : "s"}</p>
      ) : null}
      <div ref={containerRef} className="compliance-pdf-preview-pages" />
    </div>
  );
}
