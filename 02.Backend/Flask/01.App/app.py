from flask import Flask 
from users import users_bp
from product import product_bp


app=Flask(__name__)
app.register_blueprint(users_bp, url_prefix="/user")
app.register_blueprint(product_bp, url_prefix="/product")

@app.route('/')
def home():
    return "Hi There"

if __name__ =="__main__":
    app.run(debug=True)