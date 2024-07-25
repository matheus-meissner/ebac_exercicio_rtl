import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '../components/PostComments/index';

test('Deve inserir dois comentários', () => {
    render(<Post />);
  
    // Selecionar o campo de input e botão de envio utilizando data-testid
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');
  
    // Inserir o primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);
  
    // Verificar se o primeiro comentário foi inserido
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  
    // Inserir o segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);
  
    // Verificar se o segundo comentário foi inserido
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });