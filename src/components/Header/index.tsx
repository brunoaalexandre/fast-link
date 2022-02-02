import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <p>Minhas redes 👉</p>
      <AiOutlineInstagram size={22} />
      <AiOutlineLinkedin size={22} />
      <AiOutlineGithub size={22} />
    </Container>
  );
}
