import { create } from 'zustand';

type EachT = {
  task: string;
  due: string;
  area: string;
};

interface StoreTodo {
  todos: EachT[];
  addTodo: (newTodo: EachT) => void;
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
    {
      task: 'read your note before starting',
      due: 'next',
      area: 'work',
      complete: false,
    },
  ],
  addTodo: (newTodo: EachT) => {
    set((store) => ({
      todos: [
        ...store.todos,
        {
          task: newTodo.task,
          due: newTodo.due,
          area: newTodo.area,
          complete: false,
        },
      ],
    }));
  },
}));

export default useStore;
