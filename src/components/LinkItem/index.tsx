import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import styled from 'styled-components';

import { ButtonLink, Container } from "./styles";

interface CloseModalProps {
  onRequestClose: () => void;
}

export function LinkItem({ onRequestClose }: CloseModalProps) {
  return(
    <Container>
      <header>
        <h2>Link Encurtado</h2>
        <button onClick={onRequestClose}>
          <AiOutlineClose size={28} color='#000' />
        </button>
      </header>

      <span>
        https://github.com/brunoaalexandre
      </span>

      <ButtonLink>
        https://bit.ly/1231412
        <AiOutlineCopy size={20} color="#fff" />
      </ButtonLink>
    </Container>
  );
}
