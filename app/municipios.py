from flask import Blueprint, jsonify, request
import requests

# Definindo o Blueprint para o módulo de Municípios
municipios_routes = Blueprint('municipios', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

@municipios_routes.route('/api/municipios', methods=['GET'])
def obter_municipios():
    try:
        # Obtendo o ID do distrito a partir da query string
        distrito_id = request.args.get('distrito_id')
        
        if not distrito_id:
            return jsonify({'erro': 'Distrito ID é necessário'}), 400
        
        # Fazendo a requisição para obter os municípios
        params = {'idDistrito': distrito_id}
        response = requests.get(f"{DGEG_BASE_URL}/GetMunicipios", params=params)
        data = response.json().get('resultado', [])
        
        return jsonify(data)
    except Exception as e:
        return jsonify({'erro': str(e)}), 500
