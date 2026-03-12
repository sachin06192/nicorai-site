import Link from "next/link";
import Icon from "./Icon";

interface ServiceTileProps {
  title: string;
  description: string;
  href: string;
  backgroundImage?: string;
}

export default function ServiceTile({ title, description, href, backgroundImage }: ServiceTileProps) {
  return (
    <div className="c-tile-expertise" data-button-parent="">
      <div className="c-tile-expertise_ratio">
        <div className="c-tile-expertise_inner">

          <div className="flex flex-col gap-4">
            <p className="typo-mono uppercase">{description}</p>
            <h3 className="typo-h5">{title}</h3>
          </div>

          <span className="c-button -transparent">
            <span className="c-button_inner">
              <span className="sr-only">
                Previous
              </span>
              <span className="c-button_icon-container" aria-hidden="true">
                <Icon name="arrow-right" className="c-button_icon" />
              </span>
            </span>
          </span>

          <div className="c-tile-expertise_background" aria-hidden="true">
            {backgroundImage ? (
              <Icon name={backgroundImage} className="c-tile-expertise_icon" />
            ) : (
              <Icon name="tile-scratch-06" className="c-tile-expertise_icon" />
            )}
          </div>

          <Link className="absolute w-full h-full top-0 left-0 z-above" href={href}>
            <span className="sr-only">Learn more about {title}</span>
          </Link>

        </div>
      </div>
    </div>
  );
}
