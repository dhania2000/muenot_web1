"use client"

import { createContext, useContext } from "react"
import type { NavbarContent, FooterContent } from "@/lib/site-content-data"
import { navbarContent, footerContent } from "@/lib/site-content-data"

type SiteChrome = { navbar: NavbarContent; footer: FooterContent }

const SiteChromeContext = createContext<SiteChrome>({
  navbar: navbarContent,
  footer: footerContent,
})

export function SiteChromeProvider({
  value,
  children,
}: {
  value: SiteChrome
  children: React.ReactNode
}) {
  return (
    <SiteChromeContext.Provider value={value}>
      {children}
    </SiteChromeContext.Provider>
  )
}

export function useNavbarContent(): NavbarContent {
  return useContext(SiteChromeContext).navbar
}

export function useFooterContent(): FooterContent {
  return useContext(SiteChromeContext).footer
}
