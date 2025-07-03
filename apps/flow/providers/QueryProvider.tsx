"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

import { queryClient } from "@api/client";


export default function QueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
