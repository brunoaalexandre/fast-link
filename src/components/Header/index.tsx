import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <p>Minhas redes 👉</p>
      <AiOutlineInstagram size={22} />
      <AiOutlineLinkedin size={22} />
      <AiOutlineGithub size={22} />
      <Link to="/links">
        <button>
          Meus links
        </button>
      </Link>
    </Container>
  );
}
