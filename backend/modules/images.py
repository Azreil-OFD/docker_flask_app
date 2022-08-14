from flask import Blueprint , send_file


image_bp = Blueprint('image', __name__)

@image_bp.route('/image/<image>')
def image(image):
    print(image)
    return send_file("static/image/" + image, mimetype='image/png')
