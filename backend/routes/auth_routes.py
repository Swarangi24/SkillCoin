from flask import Blueprint, request, jsonify
from backend.models.user import insert_user
import hashlib

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get("name")
    username = data.get("username")
    password = data.get("password")

    if not all([name, username, password]):
        return jsonify({"error": "Missing fields"}), 400

    # Hash password (for basic security)
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    user_data = {
        "name": name,
        "username": username,
        "password": hashed_password
    }

    inserted_id = insert_user(user_data)
    return jsonify({"msg": "User registered", "user_id": inserted_id})
