from flask import Blueprint, jsonify
import requests

marcas_routes = Blueprint('marcas', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

@marcas_routes.route('/api/marcas', methods=['GET'])
def obter_marcas():
    try:
        response = requests.get(f"{DGEG_BASE_URL}/GetMarcas")
        data = response.json().get('resultado', [])
        return jsonify(data)
    except Exception as e:
        return jsonify({'erro': str(e)}), 500
