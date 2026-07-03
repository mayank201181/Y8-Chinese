"use client";

import React from "react";
import { PinyinProvider } from "@/lib/chinese";
import { StoreProvider } from "@/lib/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <PinyinProvider>{children}</PinyinProvider>
    </StoreProvider>
  );
}
