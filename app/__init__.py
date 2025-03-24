from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)  # Permite requisições do frontend

    from .routes import configure_routes
    configure_routes(app)  # Configura todas as rotas

    return app