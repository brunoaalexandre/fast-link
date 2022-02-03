import { useState } from 'react';
import { Container, Content } from './styles';

import { Header } from '../../components/Header';

import logoImg from '../../assets/logo.png';
import { Input } from '../../components/FieldText/styles';
import { LinkItem } from '../../components/LinkItem';

import { api } from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false)

  const handleShortLink = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      });


      setData(response.data);
      setShowModal(true)

      saveLink('@fastLink', response.data);

      setLink('');
    } catch {
      alert("Coloque uma URL válida!");
      setLink('');
    }
  }

  const handleShowModalOff = () => {
    setShowModal(false)
  }

  return (
    <Container>
      <Content>
        <Header />
        <img src={logoImg} alt="Logo - Sujeito" />
        <h1>Fast Link</h1>
        <h2>Cole seu link para encurtar 👇</h2>

        <form>
          <Input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="button" onClick={handleShortLink}>Gerar link</button>
        </form>

      </Content>
      {showModal && (
        <LinkItem
          onRequestClose={handleShowModalOff}
          link={data.long_url}
          content={data.link}
        />
      )}
    </Container>
  );
}
