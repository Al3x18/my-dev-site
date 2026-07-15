import { Link } from 'react-router-dom';

const tokenPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.*?)\*\*|(https?:\/\/[^\s),]+)|([\w.%+-]+@[\w.-]+\.[A-Za-z]{2,})/g;
const linkClassName = 'text-primary transition-colors hover:text-primary/80';

function InlineLink({ href, children }) {
  const className = `${linkClassName}${href.startsWith('mailto:') ? ' font-bold' : ''}`;

  if (href.startsWith('/')) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    );
  }

  const opensNewTab = /^https?:\/\//.test(href);

  return (
    <a
      className={className}
      href={href}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

function InlineMarkdown({ children }) {
  if (typeof children !== 'string') return children;

  const content = [];
  let lastIndex = 0;

  for (const match of children.matchAll(tokenPattern)) {
    if (match.index > lastIndex) {
      content.push(children.slice(lastIndex, match.index));
    }

    const [, label, href, boldText, url, email] = match;

    if (href) {
      content.push(
        <InlineLink key={match.index} href={href}>
          {label}
        </InlineLink>
      );
    } else if (url) {
      content.push(
        <InlineLink key={match.index} href={url}>
          {url}
        </InlineLink>
      );
    } else if (email) {
      content.push(
        <InlineLink key={match.index} href={`mailto:${email}`}>
          {email}
        </InlineLink>
      );
    } else {
      content.push(
        <strong key={match.index}>
          <InlineMarkdown>{boldText}</InlineMarkdown>
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    content.push(children.slice(lastIndex));
  }

  return content;
}

export default InlineMarkdown;
