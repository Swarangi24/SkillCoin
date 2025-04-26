from config.db import db

courses = db["courses"]

def offer_course(username, skill_name, category, description, duration, skillcoins):
    course = {
        "instructor": username,
        "skill_name": skill_name,
        "category": category,
        "description": description,
        "duration": duration,
        "skillcoins": skillcoins,
        "trust_score": 50,   # default, can update later
        "available_slots": 5  # default slots
    }
    courses.insert_one(course)
    return course

def get_all_courses():
    return list(courses.find())

def get_course(course_id):
    return courses.find_one({"_id": course_id})
