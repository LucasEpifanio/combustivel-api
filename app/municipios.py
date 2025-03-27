from flask import Blueprint, jsonify, request
import requests

municipios_routes = Blueprint('municipios', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetMunicipios"

@municipios_routes.route('/api/municipios', methods=['GET'])
def obter_municipios():
    try:
        distrito_id = request.args.get('distrito_id')
        
        if not distrito_id:
            return jsonify({'erro': 'Distrito ID é necessário'}), 400

        print(f"🔹 Requisição recebida para distrito_id: {distrito_id}")

        # Fazendo a requisição para obter os municípios
        response = requests.get(DGEG_BASE_URL, params={'idDistrito': distrito_id})

        # Checando a resposta da API e retornando os dados

        if response.status_code != 200:
            return jsonify({'erro': 'Erro ao obter municípios'}), 500
        
        data = response.json()

        if 'resultado' not in data:
            return jsonify({'erro': 'Nenhum resultado encontrado'}), 404

        return jsonify({'status': True, 'resultado': data['resultado']})
    
    except Exception as e:
        return jsonify({'erro': str(e)}), 500
