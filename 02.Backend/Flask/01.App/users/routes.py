from flask import Blueprint

users_bp=Blueprint("users",__name__)

@users_bp.route('/')
def user():
    return "This is user page"

@users_bp.route('/users/<user_id>') ## Dynamic Url
def user_id(user_id):
    return f"User id is {user_id}"