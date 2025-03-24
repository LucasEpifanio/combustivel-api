from flask import Blueprint, jsonify
import requests

# Definindo o Blueprint para o módulo de Tipos de Postos
tipos_postos_routes = Blueprint('tipos_postos', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

# Rota para obter os tipos de postos
@tipos_postos_routes.route('/api/tipos_postos', methods=['GET'])
def obter_tipos_postos():
    try:
        # Fazendo a requisição para obter os tipos de postos
        response = requests.get(f"{DGEG_BASE_URL}/GetTiposPostos")
        
        # Checando a resposta da API e retornando os dados
        data = response.json().get('resultado', [])
        return jsonify(data)
    except Exception as e:
        # Em caso de erro, retorna um erro genérico
        return jsonify({'erro': str(e)}), 500
