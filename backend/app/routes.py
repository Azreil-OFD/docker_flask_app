from modules.article import article_bp
from modules.people import people_bp
from modules.home_page import home_page_bp

def route(app):
    app.register_blueprint(article_bp)
    app.register_blueprint(people_bp)
    app.register_blueprint(home_page_bp)