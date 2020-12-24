import { firebaseApp } from "../config/firebase";

class TaskService {
  addNewTask(newTask) {
    return firebaseApp.firestore().collection("Tasks").add(newTask);
  }
  getMyTasks(userId) {
    return firebaseApp
      .firestore()
      .collection("Tasks")
      .where("userId", "==", userId)
      .get()
      .then((result) => {
        return result.docs.map((document) => {
          const task = document.data();
          return {
            id: document.id,
            title: task.title,
            description: task.description,
            isDone: task.isDone,
          };
        });
      });
  }
}

export default new TaskService();