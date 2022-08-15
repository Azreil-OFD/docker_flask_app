from flask import Blueprint

hello_world_bp = Blueprint('hello_world', __name__)

@hello_world_bp.route('/')
def hello_world():
    return "<h1>Hello, World! dfasrf<h1>"


@hello_world_bp.route('/hello')
def hello():
    return {
        "text":"hello"
    }