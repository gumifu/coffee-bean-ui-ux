"use client";

// SVG Assets for Coffee Bean Site
import { Sprout, Package, Flame } from "lucide-react";

export const imgLogo = (
  <svg width="88" height="24" viewBox="0 0 88 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">
      COFFEE
    </text>
  </svg>
);

export const IconCrop = () => (
  <Sprout size={16} color="white" strokeWidth={2} />
);

export const IconHive = () => (
  <Package size={16} color="white" strokeWidth={1.5} />
);

export const IconToast = () => (
  <Flame size={16} color="white" strokeWidth={1.5} />
);

