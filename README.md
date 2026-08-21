# Service Desk API - Validador de Chamados

Este projeto é uma API simples de Service Desk focada na validação do título de chamados, integrada com testes automatizados via Jest e CI/CD através do GitHub Actions.

---

## 🛠️ Regras de Validação de Título

O título do chamado deve respeitar os seguintes critérios:
* **Mínimo:** 5 caracteres.
* **Máximo:** 100 caracteres.
* **Espaços:** Não é permitido enviar apenas espaços em branco.

---

## 🧪 Executando os Testes (Jest)

Certifique-se de instalar as dependências antes de rodar os comandos:

```bash
npm install
```

### Comandos de Teste Disponíveis:

| Comando | Descrição |
| :--- | :--- |
| `npm test` | Executa todos os testes unitários uma única vez. |
| `npm run test:watch` | Executa os testes em modo contínuo, retestando a cada alteração de código. |
| `npm run test:coverage` | Gera o relatório de cobertura de código (*Coverage Report*). |

---

## 🚀 Integração Contínua (GitHub Actions)

A pipeline automatizada roda a cada `push` ou `pull_request` enviado para a branch `main`.

1. **Instalação:** Baixa o ambiente Node.js e instala dependências via `npm ci`.
2. **Testes:** Executa o comando `npm test`.
3. **Status:** 
   * 🟢 **Success (Pass):** Todos os testes passaram.
   * 🔴 **Failure (Fail):** Ocorreu alguma falha nos testes unitários e o merge/build é interrompido.
