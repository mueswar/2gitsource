from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Employee

api = FastAPI()


@api.get("/")
def index():
    return {
        "message": "Hello",
        "weather": "cool"
    }


@api.get("/users/{user}")
def get_user(user: str):
    return {"user": user}


@api.get("/books")
def get_books(book: str):
    return {"book": book}


@api.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    employees = db.query(Employee).all()

    return employees
