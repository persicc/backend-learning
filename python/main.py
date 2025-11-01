

class TodoModel :
    def __init__(self, id, title, isDone, createdAt):
        self.id = id
        self.title = title,
        self.isDone = isDone
        self.createdAt = createdAt

    def getId(self):
        return self.id
    
    def getTitle(self):
        return self.title
    
    def setTitle(self, newTitle):
        self.title = newTitle

    def getIsDone(self): 
        return self.isDone
    


class TodoService:

    def getAll():
        pass

    def getOne():
        pass

    def updateOne():
        pass

    def deleteOne():
        pass




class TodoController:
    def __init__(self):
        self.todoService = TodoService()

    def getAll(self):
        todos = self.todoService.getAll()
        return todos
    
    def getOne(self):
        todo = self.todoService.getOne()
        return todo
        
        