from flask import Blueprint
from modules.database import database

people_bp = Blueprint('people', __name__)

@people_bp.route('/people/all')
def people_all():
    return database.people_json()


# TODO:  получить участница по id
@people_bp.route('/people/<int:peoples_id>')
def people_id(peoples_id: int):
    return database.people_byId(peoples_id)
