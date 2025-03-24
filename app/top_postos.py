from flask import Blueprint, jsonify
import requests

# Definindo o Blueprint para o módulo de Top Postos
top_postos_routes = Blueprint('top_postos', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

# Rota para obter os postos mais populares
@top_postos_routes.route('/api/top_postos', methods=['GET'])
def obter_top_postos():
    try:
        # Fazendo a requisição para obter os postos mais populares
        response = requests.get(f"{DGEG_BASE_URL}/ListarTopPostos")
        
        # Checando a resposta da API e retornando os dados
        data = response.json().get('resultado', [])
        return jsonify(data)
    except Exception as e:
        # Em caso de erro, retorna um erro genérico
        return jsonify({'erro': str(e)}), 500
