from config.db import users_collection
import bcrypt

def create_user(name, username, password):
    hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    user = {
        "name": name,
        "username": username,
        "password": hashed_pw,  # hashed password (bytes)
        "wallet": 10,           # starting SkillCoins
        "trust_score": 50,      # starting trust score
    }
    users_collection.insert_one(user)
    return user

def verify_user(username, password):
    user = users_collection.find_one({"username": username})
    if user:
        # user["password"] is stored as bytes
        stored_password = user["password"]
        
        # If it's stored as string, convert to bytes
        if isinstance(stored_password, str):
            stored_password = stored_password.encode('utf-8')
        
        if bcrypt.checkpw(password.encode(), stored_password):
            return user
    return None
