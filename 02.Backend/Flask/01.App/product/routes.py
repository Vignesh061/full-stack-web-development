from flask import Blueprint

product_bp=Blueprint("product",__name__)

@product_bp.route('/')
def product():
    return "This is Product page"