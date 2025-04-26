from config.db import db

transactions = db["transactions"]

def create_transaction(buyer, course_id, skillcoins_spent):
    tx = {
        "buyer": buyer,
        "course_id": course_id,
        "skillcoins_spent": skillcoins_spent,
        "status": "completed"
    }
    transactions.insert_one(tx)
    return tx
    q