from flask import Blueprint, request, jsonify
from models.transaction import create_transaction
from models.course import courses
from models.user import create_user, verify_user

from bson import ObjectId

transaction = Blueprint('transaction', __name__)

@transaction.route("/buy-course", methods=["POST"])
def buy_course():
    data = request.json
    course_id = ObjectId(data["course_id"])
    buyer_username = data["buyer"]

    course = courses.find_one({"_id": course_id})
    buyer = users.find_one({"username": buyer_username})

    if not course or not buyer:
        return jsonify({"error": "Invalid Course or Buyer"}), 404

    if buyer["wallet"] < course["skillcoins"]:
        return jsonify({"error": "Not enough SkillCoins"}), 400

    users.update_one({"username": buyer_username}, {"$inc": {"wallet": -course["skillcoins"]}})
    users.update_one({"username": course["instructor"]}, {"$inc": {"wallet": course["skillcoins"]}})

    tx = create_transaction(buyer_username, course_id, course["skillcoins"])
    return jsonify({"message": "Course Purchased", "transaction": str(tx["_id"])})
