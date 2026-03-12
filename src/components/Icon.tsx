interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <span className={`c-icon${className ? ` ${className}` : ""}`}>
      <svg className={`svg-${name}`} focusable={false} aria-hidden="true">
        <use xlinkHref={`/assets/svgs/sprite.svg?=18#${name}`} />
      </svg>
    </span>
  );
}
