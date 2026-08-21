/**
 * Valida o título de um chamado no Service Desk.
 * Regras:
 * - Mínimo de 5 caracteres.
 * - Máximo de 100 caracteres.
 */
export function validateTitle(title: string): boolean {
  if (typeof title !== 'string') {
    return false;
  }

  const trimmedTitle = title.trim();

  return trimmedTitle.length >= 5 && trimmedTitle.length <= 100;
}
