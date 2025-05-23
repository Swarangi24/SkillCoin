from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client["skillcoin"]

users_collection = db["users"]

skills_collection = db["skills"]