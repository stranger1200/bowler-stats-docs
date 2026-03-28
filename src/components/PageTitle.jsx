import { useEffect } from 'react';

/** Sets document.title declaratively. Renders nothing. */
export function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
