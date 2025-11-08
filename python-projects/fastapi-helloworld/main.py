from fastapi import FastAPI

api = FastAPI()

todos = [
{"id":"1","name":"name1", "description":"description1"},
{"id":"2","name":"name2", "description":"description2"},
{"id":"3","name":"name3", "description":"description3"}
]
@api.get('/')
def index():
	return {"message":"Hello"}

@api.get('/todos')    
def one():
    return todos

@api.get('/todos/{id}')    
def two(id:int):
    return todos[id]



