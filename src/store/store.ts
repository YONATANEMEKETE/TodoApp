import { create } from 'zustand';

type EachT = {
  task: string;
  due: Date;
  area: string;
};

type Todo = {
  task: string;
  due: string;
  area: string;
  complete: boolean;
};

interface StoreTodo {
  todos: Todo[];
  addTodo: (newTodo: EachT) => void;
  removeTodo: (task: string) => void;
  toggleCompletedState: (task: string) => void;
}

const useStore = create<StoreTodo>((set) => ({
  todos: [
    {
      task: 'Meditate',
      due: '20, june',
      area: 'personal',
      complete: false,
    },
    {
      task: 'work on the project',
      due: '20, june',
      area: 'work',
      complete: false,
    },
  ],
  addTodo: (newTodo: EachT) => {
    const newnewTodo = newTodo;

    const month = newnewTodo.due.toLocaleString('en-US', { month: 'long' });
    const day = newnewTodo.due.toLocaleString('en-US', { day: '2-digit' });
    const year = newnewTodo.due.getFullYear();

    set((store) => ({
      todos: [
        ...store.todos,
        {
          task: newnewTodo.task,
          due: `${month} ${day}, ${year}`,
          area: newnewTodo.area,
          complete: false,
        },
      ],
    }));
  },

  removeTodo: (task) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.task !== task),
    }));
  },

  toggleCompletedState: (task) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.task === task
          ? ({ ...todo, complete: !todo.complete } as Todo)
          : todo
      ),
    }));
  },
}));

export default useStore;
