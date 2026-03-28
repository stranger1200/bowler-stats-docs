/** Formats a single usage line for the Commands page (handles subcommands, args, kind, and invoke overrides). */
export function formatUsageLine(commandName, line) {
  const root = `/${commandName}`;
  if (line.invoke) return line.invoke;

  if (line.kind === 'argument') {
    if (!line.sub) return root;
    const wrapped = line.optional ? `(${line.sub})` : `[${line.sub}]`;
    return `${root} ${wrapped}`;
  }

  if (!line.sub) return root;

  if (!line.args?.length) {
    return `${root} ${line.sub}`;
  }

  const argStr = line.args
    .map((a) => {
      const name = typeof a === 'string' ? a : a.name;
      let optional = false;
      if (typeof a === 'object' && a !== null) {
        if (typeof a.optional === 'boolean') optional = a.optional;
        else if (typeof a.required === 'boolean') optional = !a.required;
      }
      return optional ? `(${name})` : `[${name}]`;
    })
    .join(' ');

  return `${root} ${line.sub} ${argStr}`;
}
