interface HighlightedParagraphProps {
  accentText: string;
  mainText: string;
  body?: string;
}

export default function HighlightedParagraph({ accentText, mainText, body }: HighlightedParagraphProps) {
  return (
    <section className="c-highlighted-paragraph" data-scroll="" data-scroll-offset="20%, 20%">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="flex flex-col gap-y-fluid-2xl lg:col-start-4 lg:col-span-9 lg:max-w-[932px]">
          <div className="relative">
            <div className="c-highlighted-paragraph_heading || typo-h2">
              <p className="typo-mono color-accent">{accentText}</p>
            </div>

            <p className="c-highlighted-paragraph_main || typo-h2">
              <span dangerouslySetInnerHTML={{ __html: mainText }} />
            </p>

            {body && (
              <div className="c-highlighted-paragraph_body || typo-body mt-fluid-xl">
                <p>{body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
