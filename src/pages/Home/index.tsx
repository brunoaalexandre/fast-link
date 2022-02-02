import { Container } from './styles';

import { Header } from '../../components/Header';

import logoImg from '../../assets/logo.png';
import { Input } from '../../components/FieldText/styles';

export function Home() {
  return (
    <>
      <Container>
      <Header />
        <img src={logoImg} alt="Logo - Sujeito" />
        <h1>Fast Link</h1>
        <h2>Cole seu link para encurtar 👇</h2>

        <form>
          <Input placeholder="Cole seu link aqui..." />
          <button type="button">Gerar link</button>
        </form>
      </Container>
    </>
  );
}
