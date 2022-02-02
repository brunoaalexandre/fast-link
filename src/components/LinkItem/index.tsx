import { useState } from 'react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import styled from 'styled-components';

import { ButtonLink, Container } from "./styles";

interface ModalProps {
  onRequestClose: () => void;
  link: string;
  content: string;
}

export function LinkItem({ onRequestClose, link, content }: ModalProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
  }

  return(
    <Container>
      <header>
        <h2>Link Encurtado</h2>
        <button onClick={onRequestClose}>
          <AiOutlineClose size={28} color='#000' />
        </button>
      </header>

      <span>
        {link}
      </span>

      <ButtonLink onClick={handleCopy}>
        {content}
        <AiOutlineCopy size={20} color="#fff" />
      </ButtonLink>
    </Container>
  );
}
