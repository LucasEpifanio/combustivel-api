from flask import Blueprint, jsonify, request
import requests

results_routes = Blueprint('results', __name__)

DGEG_BASE_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos"

@results_routes.route('/api/results', methods=['GET'])
def obter_results():
    try:
        # Parâmetros obrigatórios da API
        tipo_combustivel = request.args.get('tipo_combustivel', '3201')  # default gasolina simples 95
        pagina = request.args.get('pagina', 1)  # Padrão para página 1
        qtd_por_pagina = 8000  # O número máximo de resultados por página

        # Definir os parâmetros que serão enviados na requisição GET
        params = {
            'idsTiposComb': tipo_combustivel,
            'qtdPorPagina': qtd_por_pagina,
            'pagina': pagina
        }

        # Fazer a requisição GET à API externa
        response = requests.get(DGEG_BASE_URL, params=params)

        # Verificar se a resposta é válida
        if response.status_code != 200:
            return jsonify({'erro': 'Erro ao obter dados da API externa'}), 500

        # Obter os dados da resposta JSON
        data = response.json().get('resultado', [])
        
        # Retornar os dados em formato JSON
        return jsonify(data)

    except Exception as e:
        # Se ocorrer algum erro durante a requisição ou processamento, retornar uma mensagem de erro
        return jsonify({'erro': str(e)}), 500
