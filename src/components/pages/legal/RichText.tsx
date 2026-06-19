import { Fragment, ReactNode } from 'react';

// Renders inline runs: §§…§§ → <strong>, plus auto-links http(s) URLs and emails.
function renderInline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  // Split on bold markers first.
  const boldParts = text.split('§§');
  boldParts.forEach((part, bi) => {
    const isBold = bi % 2 === 1;
    const linked = linkify(part, `${keyBase}-${bi}`);
    out.push(
      isBold ? (
        <strong key={`${keyBase}-b-${bi}`} className="font-semibold text-foreground">
          {linked}
        </strong>
      ) : (
        <Fragment key={`${keyBase}-t-${bi}`}>{linked}</Fragment>
      ),
    );
  });
  return out;
}

function linkify(text: string, keyBase: string): ReactNode[] {
  const pattern = /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const token = m[0];
    const href = token.includes('@') ? `mailto:${token}` : token;
    nodes.push(
      <a
        key={`${keyBase}-l-${i}`}
        href={href}
        className="text-foreground underline underline-offset-2 hover:no-underline"
      >
        {token}
      </a>,
    );
    last = m.index + token.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Renders a multi-paragraph string (\n\n splits) with inline bold/link support. */
export default function RichText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const paras = text.split('\n\n');
  return (
    <>
      {paras.map((p, i) => (
        <p key={i} className={className}>
          {p.split('\n').map((line, li, arr) => (
            <Fragment key={li}>
              {renderInline(line, `p${i}-l${li}`)}
              {li < arr.length - 1 ? <br /> : null}
            </Fragment>
          ))}
        </p>
      ))}
    </>
  );
}
