from flask import Flask

app=Flask(__name__)

@app.route('/')
def home():
    return "Hi There"

@app.route('/signup')
def signup():
    return "This is signup page"

@app.route('/login')
def login():
    return "This is login page"

@app.route('/demo')
def demo():
    return "demo"

if __name__ =="__main__":
    app.run(debug=True)