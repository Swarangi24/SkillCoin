from flask import Blueprint, request, jsonify
from models.course import offer_course, courses
from bson import ObjectId

course = Blueprint('course', __name__)

@course.route("/offer-skill", methods=["POST"])
def offer_skill():
    data = request.json
    course = offer_course(
        username=data["username"],
        skill_name=data["skill_name"],
        category=data["category"],
        description=data["description"],
        duration=data["duration"],
        skillcoins=data["skillcoins"]
    )
    return jsonify({"message": "Skill offered successfully", "course": course})

@course.route("/course/<course_id>", methods=["GET"])
def course_detail(course_id):
    course = courses.find_one({"_id": ObjectId(course_id)})
    if course:
        course["_id"] = str(course["_id"])
        return jsonify(course)
    return jsonify({"error": "Course not found"}), 404
