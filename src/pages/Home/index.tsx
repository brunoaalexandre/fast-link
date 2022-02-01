import { Container } from './styles';

import { Header } from '../../components/Header';

import logoImg from '../../assets/logo.png';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <img src={logoImg} alt="Logo - Sujeito" />
        <h1>Fast Link</h1>
        <h2>Cole seu link para encurtar 👇</h2>

        <form>
          <input type="text" placeholder="Cole seu link aqui..." />
          <button type="button">Gerar link</button>
        </form>
      </Container>
    </>
  );
}
