import { Link } from 'react-router-dom';

const tokenPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.*?)\*\*/g;

function InlineMarkdown({ children }) {
  if (typeof children !== 'string') return children;

  const content = [];
  let lastIndex = 0;

  for (const match of children.matchAll(tokenPattern)) {
    if (match.index > lastIndex) {
      content.push(children.slice(lastIndex, match.index));
    }

    const [, label, href, boldText] = match;

    if (href?.startsWith('/')) {
      content.push(
        <Link key={match.index} to={href}>
          {label}
        </Link>
      );
    } else if (href) {
      const opensNewTab = /^https?:\/\//.test(href);

      content.push(
        <a
          key={match.index}
          href={href}
          target={opensNewTab ? '_blank' : undefined}
          rel={opensNewTab ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      );
    } else {
      content.push(<strong key={match.index}>{boldText}</strong>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    content.push(children.slice(lastIndex));
  }

  return content;
}

export default InlineMarkdown;
