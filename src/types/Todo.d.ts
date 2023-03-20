interface ITodoItemContent {
  content: string;
}

interface ITodoItem {
  id: string;
  completed: boolean;
  editing: boolean;
  content: string;
}
