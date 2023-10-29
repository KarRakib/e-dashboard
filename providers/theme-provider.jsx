"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeProvider = () => {
  return <NextThemesProvider >{children}</NextThemesProvider>
};

export default ThemeProvider;





