'use client";'

import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const baseURL = "https://api.inorain.tv/";

export const apiClient = axios.create({
  baseURL: "https://api.inorain.tv/",
  headers: {
    "Content-Type": "application/json",
  },
});


