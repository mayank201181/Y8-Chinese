"use client";

// Printable "Certificate of Mastery" modal. The sheet carries the
// .certificate-print class so the global @media print rules show only it.

import React, { useState } from "react";
import { Zh } from "@/lib/chinese";

export default function CertificateButton({
  title,
  learnerName,
  stars,
}: {
  title: string;
  learnerName: string;
  stars: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-amber-950 shadow-sm transition-colors hover:bg-amber-300"
      >
        🏆 Print certificate
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate of Mastery"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex max-h-full w-full max-w-2xl flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* the printable sheet */}
            <div className="certificate-print overflow-auto rounded-lg bg-[#fffdf5] p-3 shadow-2xl">
              <div className="rounded-md border-8 border-double border-amber-500 p-1.5">
                <div className="rounded-sm border-2 border-rose-400 px-6 py-8 text-center sm:px-10">
                  <p className="text-4xl">🐉 🏮 🐉</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
                    Certificate of Mastery
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Year 8 Chinese Lab
                  </p>

                  <p className="mt-6 text-sm italic text-slate-500">
                    This certifies that
                  </p>
                  <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    {learnerName}
                  </p>

                  <p className="mt-4 text-base text-slate-700">
                    has mastered{" "}
                    <span className="font-bold text-slate-900">{title}</span>
                  </p>

                  <p
                    className="mt-3 text-2xl tracking-wide text-amber-500"
                    aria-label={`${stars} stars`}
                  >
                    {"⭐".repeat(Math.max(0, stars)) || "⭐"}
                    <span className="ml-2 align-middle text-sm font-bold text-amber-600">
                      {stars} {stars === 1 ? "star" : "stars"}
                    </span>
                  </p>

                  <p className="mt-6 text-3xl font-bold">
                    <Zh hanzi="加油！" pinyin="jiāyóu!" gloss="keep going!" />
                  </p>
                  <p className="text-xs text-slate-500">jiāyóu — keep going!</p>

                  <div className="mt-8 flex items-end justify-between text-left text-xs text-slate-500">
                    <div>
                      <p className="border-t border-slate-300 pt-1 font-semibold">
                        Date: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl">🐼</p>
                      <p className="border-t border-slate-300 pt-1 font-semibold">
                        Xiǎolóng, Chief Dragon Examiner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* controls (outside the sheet, hidden when printing) */}
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full bg-rose-500 px-5 py-2 text-sm font-bold text-white hover:bg-rose-600"
              >
                🖨️ Print
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
