from flask import Blueprint, request, jsonify
from models.user import create_user, verify_user

auth = Blueprint('auth', __name__)

@auth.route("/register", methods=["POST"])
def register():
    data = request.json
    user = create_user(data["name"], data["username"], data["password"])
    return jsonify({"message": "User Registered Successfully", "user": user["username"]})

@auth.route("/login", methods=["POST"])
def login():
    data = request.json
    user = verify_user(data["username"], data["password"])
    if user:
        return jsonify({"message": "Login Successful", "username": user["username"]})
    else:
        return jsonify({"error": "Invalid credentials"}), 401
