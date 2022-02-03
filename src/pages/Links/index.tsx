import { useState, useEffect } from 'react';

import { AiOutlineArrowLeft, AiOutlineDelete, AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { LinkItem } from '../../components/LinkItem'

import { getLinkSave } from '../../services/storeLinks';

import { Container, Content } from './styles';

export function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave('@fastLink');

      if (result.length === 0) {
        alert('Lista vazia :(');
      }
      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link: string) {
    setData(link)
    setShowModal(true);
  }

  return (
    <Container>
      <Content>
        <header>
          <Link to="/">
            <AiOutlineArrowLeft size={60} />
          </Link>
          <h1>Meus links</h1>
        </header>

        {myLinks.map(link => (
          <div key={link.id}>
            <button onClick={() => handleOpenLink(link)}>
              <AiOutlineLink color='#fff' />
              {link.long_url}
            </button>
            <AiOutlineDelete color='#ff5454' />
          </div>
        ))}
      </Content>
      {showModal && (
        <LinkItem
          onRequestClose={() => setShowModal(false)}
          link={data.long_url}
          content={data.link}
        />
      )}
    </Container>
  );
}
