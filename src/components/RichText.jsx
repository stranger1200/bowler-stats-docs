/** Renders structured rich text (plain string or array of strings/`{ bold }` nodes) without dangerouslySetInnerHTML. */
export function RichText({ content }) {
  if (!content) return null;
  if (typeof content === 'string') return content;

  return content.map((node, i) => {
    if (typeof node === 'string') return node;
    if (node.bold !== undefined) return <strong key={i}>{node.bold}</strong>;
    return null;
  });
}

export function richToText(content) {
  if (!content) return '';
  if (typeof content === 'string') return content;
  return content
    .map((node) => {
      if (typeof node === 'string') return node;
      if (node.bold !== undefined) return node.bold;
      return '';
    })
    .join('');
}
