"use client";

import { useEffect } from "react";

interface PageContentProps {
  html: string;
  template?: string;
  theme?: string;
}

export default function PageContent({ html, template = "home", theme = "blue" }: PageContentProps) {
  useEffect(() => {
    // Set data attributes on <html> element to match original site
    const root = document.documentElement;
    root.setAttribute("data-template", template);
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-header-theme", "default");

    return () => {
      root.removeAttribute("data-template");
      root.removeAttribute("data-theme");
      root.removeAttribute("data-header-theme");
    };
  }, [template, theme]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
