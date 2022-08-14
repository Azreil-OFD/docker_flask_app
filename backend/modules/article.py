from flask import Blueprint
from modules.database import database

article_bp = Blueprint('article', __name__)


# TODO:  статьи фавориты
@article_bp.route('/article/favorite')
def article_favorite():
    return database.article_favorite()


# TODO:  все статьи
@article_bp.route('/article/all')
def article_all():
    return database.article_json()


# TODO:  получить статью по id
@article_bp.route('/article/<int:article_id>')
def article(article_id: int):
    return database.article_byId(article_id)
