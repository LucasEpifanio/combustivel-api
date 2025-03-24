from .results import results_routes
from .marcas import marcas_routes
from .distritos import distritos_routes
from .municipios import municipios_routes
from .tipos_combustiveis import tipos_combustiveis_routes
from .tipos_postos import tipos_postos_routes
from .top_postos import top_postos_routes

def configure_routes(app):
    app.register_blueprint(results_routes)
    app.register_blueprint(marcas_routes)
    app.register_blueprint(distritos_routes)
    app.register_blueprint(municipios_routes)
    app.register_blueprint(tipos_combustiveis_routes)
    app.register_blueprint(tipos_postos_routes)
    app.register_blueprint(top_postos_routes)
