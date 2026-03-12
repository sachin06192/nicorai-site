import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  color?: "accent" | "white";
  className?: string;
}

export default function Button({ href, children, color = "accent", className }: ButtonProps) {
  return (
    <Link className={`c-button -color-${color}${className ? ` ${className}` : ""}`} href={href}>
      <span className="c-button_inner">
        <span className="c-button_label typo-button">
          <span>{children}</span>
        </span>
      </span>
    </Link>
  );
}
