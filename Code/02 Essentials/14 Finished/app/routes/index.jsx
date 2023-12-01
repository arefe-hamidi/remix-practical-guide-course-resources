import { Link } from '@remix-run/react';

import homeStyles from '~/styles/home.css';

export default function Index() {
  const tryButton= styled.p`
  a:hover {
    background-color: var(--color-secondary-200);
  }
  `
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <tryButton>
        <Link to="/notes">Try Now!</Link>
      </tryButton>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
