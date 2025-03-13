# SaaS Petições v2

Sistema de geração de petições jurídicas utilizando inteligência artificial.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

### Frontend (Next.js)
- Interface de usuário moderna e responsiva
- Autenticação de usuários via Supabase
- Dashboard para gerenciamento de petições
- Gerador de petições com formulários intuitivos

### Backend (Python/Flask)
- API para geração de petições
- Integração com OpenAI para processamento de texto
- Gerenciamento de templates de documentos
- Manipulação de arquivos DOCX

## Requisitos

### Frontend
- Node.js 16+
- NPM ou Yarn

### Backend
- Python 3.9+
- Bibliotecas Python (ver requirements.txt)
- Chave de API da OpenAI

## Instalação

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd python_app
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Configuração

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_supabase
```

Crie um arquivo `.env` na pasta `python_app` com:

```
OPENAI_API_KEY=sua_chave_api_openai
ASSISTANT_ID=seu_id_assistente_openai
```

## Funcionalidades

- Geração de petições jurídicas
- Gerenciamento de clientes
- Armazenamento de petições geradas
- Edição e personalização de templates
- Dashboard com estatísticas

## Licença

Todos os direitos reservados - LGC Consultoria