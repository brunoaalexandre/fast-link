import { AiOutlineArrowLeft, AiOutlineDelete, AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Container } from './styles';

export function Links() {
  return (
    <Container>
      <header>
        <Link to="/">
          <AiOutlineArrowLeft size={60} />
        </Link>
        <h1>Meus links</h1>
      </header>

      <div>
        <button>
          <AiOutlineLink color='#fff' />
          https://github.com/brunoaalexandre/
        </button>
        <AiOutlineDelete color='#ff5454' />
      </div>
    </Container>
  );
}
