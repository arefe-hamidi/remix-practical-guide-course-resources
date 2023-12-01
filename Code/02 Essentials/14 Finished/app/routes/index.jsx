import { Link } from '@remix-run/react';
import styled from 'styled-components'
const TryButton= styled.p`
  margin-top: 2rem;
 a {
  text-decoration: none;
  background-color: var(--color-secondary-100);
  color: var(--color-primary-800);
  padding: 0.5rem 2rem;
  border-radius: 4px;
  font-size: 1.5rem;
}
a:hover {
  background-color: var(--color-secondary-200);
}
`
const Content = styled.main`
text-align: center;
color: var(--color-primary-10);
`
export default function Index() {

  return (
    <Content>
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <TryButton className='button-text'>
        <Link to="/notes">Try Now!</Link>
      </TryButton>
    </Content>
  );
}

