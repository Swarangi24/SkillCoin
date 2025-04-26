from flask import Blueprint, jsonify
from models.course import get_all_courses
from models.user import create_user, verify_user

dashboard = Blueprint('dashboard', __name__)

@dashboard.route("/dashboard/<username>", methods=["GET"])
def dashboard_info(username):
    user = users.find_one({"username": username})
    if not user:
        return jsonify({"error": "User not found"}), 404
    all_courses = get_all_courses()
    return jsonify({
        "wallet": user["wallet"],
        "trust_score": user["trust_score"],
        "courses": all_courses
    })
