from flask import Blueprint, jsonify
import requests

distritos_routes = Blueprint('distritos', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb"

@distritos_routes.route('/api/distritos', methods=['GET'])
def obter_distritos():
    try:
        response = requests.get(f"{DGEG_BASE_URL}/GetDistritos")
        data = response.json().get('resultado', [])
        return jsonify(data)
    except Exception as e:
        return jsonify({'erro': str(e)}), 500
