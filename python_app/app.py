from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import os
import json
import uuid
from datetime import datetime
import requests
from docx import Document
import re
from dotenv import load_dotenv
import time
import logging
from openai import OpenAI

# Desativar configurações de proxy que podem estar causando problemas
os.environ.pop('HTTP_PROXY', None)
os.environ.pop('HTTPS_PROXY', None)
os.environ.pop('http_proxy', None)
os.environ.pop('https_proxy', None)

# Carregar variáveis de ambiente
load_dotenv()

app = Flask(__name__)

# Configurar CORS para permitir requisições de qualquer origem
CORS(app)

# Configuração de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuração adicional para CORS
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Configuração
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ASSISTANT_ID = os.getenv("ASSISTANT_ID")

# Log de inicialização com informações do assistente
print("="*80)
print(f"Inicializando aplicação com API OpenAI")
print(f"ID do Assistente: {ASSISTANT_ID}")

# Diretórios
PETICOES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'peticoes')
TEMPLATES_DOCX_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates_docx')
CLIENTES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'clientes')
os.makedirs(PETICOES_DIR, exist_ok=True)
os.makedirs(TEMPLATES_DOCX_DIR, exist_ok=True)
os.makedirs(CLIENTES_DIR, exist_ok=True)

# Rotas da API
@app.route('/')
def index():
    return jsonify({"status": "online", "message": "API de Geração de Petições"})

@app.route('/api/clientes', methods=['GET'])
def listar_clientes():
    print("="*80)
    print("Recebida solicitação para listar clientes")
    
    clientes = []
    try:
        # Verificar se o diretório de clientes existe
        if os.path.exists(CLIENTES_DIR):
            # Listar arquivos JSON no diretório de clientes
            arquivos_clientes = [f for f in os.listdir(CLIENTES_DIR) if f.endswith('.json')]
            print(f"Clientes carregados: {len(arquivos_clientes)}")
            
            # Carregar dados de cada cliente
            for arquivo in arquivos_clientes:
                try:
                    with open(os.path.join(CLIENTES_DIR, arquivo), 'r', encoding='utf-8') as f:
                        cliente = json.load(f)
                        clientes.append(cliente)
                        print(f"Cliente adicionado: {cliente.get('nome', 'Nome não encontrado')}")
                except Exception as e:
                    print(f"Erro ao carregar cliente {arquivo}: {str(e)}")
        
        print(f"Total de clientes retornados: {len(clientes)}")
        return jsonify(clientes)
    except Exception as e:
        print(f"Erro ao listar clientes: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/templates', methods=['GET'])
def listar_templates():
    try:
        templates = [f for f in os.listdir(TEMPLATES_DOCX_DIR) 
                    if f.endswith('.docx') and not f.startswith('~$')]
        return jsonify(templates)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Iniciar o servidor
if __name__ == '__main__':
    print("="*80)
    print("Iniciando servidor Flask na porta 5000...")
    app.run(host='0.0.0.0', port=5000, debug=True)