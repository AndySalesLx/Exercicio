import { validateTitle } from './validator';

describe('Validação de Título do Chamado (Service Desk)', () => {
  // --- CASOS DE SUCESSO ---
  test('deve retornar true para um título válido com tamanho médio', () => {
    expect(validateTitle('Erro ao acessar o sistema')).toBe(true);
  });

  test('deve retornar true para o limite mínimo de 5 caracteres', () => {
    expect(validateTitle('12345')).toBe(true);
  });

  test('deve retornar true para o limite máximo de 100 caracteres', () => {
    const title100 = 'A'.repeat(100);
    expect(validateTitle(title100)).toBe(true);
  });

  // --- CASOS DE FALHA ---
  test('deve retornar false para títulos com menos de 5 caracteres', () => {
    expect(validateTitle('Erro')).toBe(false);
  });

  test('deve retornar false para títulos com mais de 100 caracteres', () => {
    const title101 = 'A'.repeat(101);
    expect(validateTitle(title101)).toBe(false);
  });

  test('deve retornar false para títulos vazios ou com apenas espaços', () => {
    expect(validateTitle('')).toBe(false);
    expect(validateTitle('    ')).toBe(false);
  });
});
