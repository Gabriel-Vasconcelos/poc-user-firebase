# POC - Firebase

Este repositório contém uma prova de conceito (POC) utilizando o Firebase como solução para o backend de uma aplicação Next.js. O projeto foi desenvolvido como parte do curso de **Projeto Integrado 2** do **Curso de Sistemas e Mídias Digitais** da **Universidade Federal do Ceará (UFC)**.

## Objetivo

O objetivo desta POC é demonstrar a viabilidade de utilizar o Firebase como backend em um projeto Next.js, comparando-o com outras alternativas. Esta POC faz parte de um estudo comparativo entre Firebase e [Prisma/SQLite](https://github.com/Gabriel-Vasconcelos/poc-user-prisma-sqlite) para determinar a melhor solução de backend para a aplicação. A escolha do Firebase neste contexto foi motivada pela necessidade de uma entrega rápida e pela vasta gama de serviços de backend oferecidos por essa plataforma

## Contexto
Dado que o projeto está inserido em um ambiente acadêmico, onde o tempo de desenvolvimento é bem limitado, o Firebase se mostrou uma escolha ideal. A plataforma não só permite uma configuração ágil, mas também oferece uma série de serviços integrados que simplificam o desenvolvimento, como autenticação, banco de dados (Firestore), hospedagem, entre outros. Isso permitiu à equipe focar nas funcionalidades essenciais e na experiência do usuário, sem se preocupar com a complexidade da infraestrutura.

## A Aplicação
A aplicação desenvolvida nesta POC é uma interface simples para criação e listagem de usuários. Ela foi implementada utilizando Next.js no frontend, estilizada com Tailwind CSS, e aproveitando componentes da Shadcn UI para construir uma interface moderna e funcional.

### Funcionalidades Principais
- **Criação de Usuários:** Na tela inicial, o usuário encontra um formulário com diversos campos para inserção de dados. Ao submeter o formulário, um novo usuário é criado tanto no serviço de Authentication quanto na Firestore do Firebase.

- **Listagem de Usuários:** Em uma segunda tela, a aplicação exibe uma tabela que lista todos os usuários cadastrados, puxando os dados da coleção users no Firestore.

Essas funcionalidades básicas demonstram como o Firebase pode ser utilizado para gerenciar autenticação e armazenamento de dados de forma simples e eficiente, alinhando-se ao foco da POC em agilidade e facilidade de uso.


## Tecnologias Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) - Framework React para aplicações web modernas.
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para design rápido e customizável.
  - [Shadcn UI](https://ui.shadcn.com/) - Conjunto de componentes UI acessíveis e customizáveis para React.

- **Backend**:
  - [Firebase](https://firebase.google.com/)
    - Autenticação: Implementação de autenticação com suporte a múltiplos provedores.
    - Firestore: Banco de dados NoSQL para armazenar e sincronizar dados em tempo real.

## Critérios de Avaliação

1. **Velocidade de Desenvolvimento:** O Firebase permite uma configuração rápida do backend, reduzindo o tempo necessário para iniciar o desenvolvimento da aplicação.
2. **Escalabilidade e Abstração:** O Firebase oferece escalabilidade automática e abstrai as complexidades do backend, facilitando o crescimento da aplicação sem preocupações adicionais.
3. **Custos:** O plano gratuito do Firebase cobre as necessidades iniciais do projeto, tornando-o uma solução econômica para desenvolvimento e hospedagem.
4. **Foco no que Importa:** Com o Firebase, a equipe pode concentrar-se na criação de funcionalidades essenciais e na experiência do usuário, sem se preocupar com a infraestrutura do backend.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabriel-Vasconcelos/poc-user-firebase.git

2. Instale as dependências:
   ```bash
   npm install
   
3. Configure as credenciais do Firebase no arquivo .env.local (veja .env.example para referência).
  
4. Execute o projeto em modo de desenvolvimento:
  ```bash
  npm run dev
  ```

5. Acesse http://localhost:3000 no navegador para visualizar a aplicação.

## Conclusão
Esta POC demonstrou que o Firebase é uma escolha sólida para o desenvolvimento rápido de aplicações web, especialmente em um contexto acadêmico onde a entrega rápida é crucial. A integração de múltiplos serviços de backend e a facilidade de uso tornam o Firebase uma solução atraente para projetos que exigem agilidade e escalabilidade atendendo muito bem os critérios de avaliação.

## Links Relacionados
Este repositório faz parte de um estudo comparativo. Para ver a POC utilizando [Prisma e SQLite](https://github.com/Gabriel-Vasconcelos/poc-user-prisma-sqlite), acesse o link.
