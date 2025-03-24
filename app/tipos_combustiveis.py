from flask import Blueprint, jsonify
import requests

# Definindo o Blueprint para o módulo de Tipos de Combustíveis
tipos_combustiveis_routes = Blueprint('tipos_combustiveis', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

# Rota para obter os tipos de combustíveis
@tipos_combustiveis_routes.route('/api/tipos_combustiveis', methods=['GET'])
def obter_tipos_combustiveis():
    try:
        # Fazendo a requisição para obter os tipos de combustíveis
        response = requests.get(f"{DGEG_BASE_URL}/GetTiposCombustiveis")
        
        # Checando a resposta da API e retornando os dados
        data = response.json().get('resultado', [])
        return jsonify(data)
    except Exception as e:
        # Em caso de erro, retorna um erro genérico
        return jsonify({'erro': str(e)}), 500
