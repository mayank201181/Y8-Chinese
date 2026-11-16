"use client";
// Global client preference for showing or hiding Pinyin across Vocab and Lessons
// ("Hide Pinyin" = character recognition challenge mode; hover/tap still peeks).
import { useSyncExternalStore } from "react";

const KEY = "y8c:pinyin-visible";
const EVENT = "y8c-pinyin-toggle";

function subscribe(onChange: () => void): () => void {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): boolean {
  try {
    return localStorage.getItem(KEY) !== "0";
  } catch {
    return true;
  }
}

export function usePinyinVisible(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

export function setPinyinVisible(visible: boolean): void {
  try {
    localStorage.setItem(KEY, visible ? "1" : "0");
    window.dispatchEvent(new Event(EVENT));
  } catch {
    /* ignore private-mode storage errors */
  }
}

export function togglePinyinVisible(): void {
  setPinyinVisible(!getSnapshot());
}
