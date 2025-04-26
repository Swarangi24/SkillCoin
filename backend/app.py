from flask import Flask
from routes.auth import auth
from routes.dashboard import dashboard
from routes.course import course
from routes.transaction import transaction

app = Flask(__name__)

app.register_blueprint(auth)
app.register_blueprint(dashboard)
app.register_blueprint(course)
app.register_blueprint(transaction)

if __name__ == "__main__":
    app.run(debug=True)
