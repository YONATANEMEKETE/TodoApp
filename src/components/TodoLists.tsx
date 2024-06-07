import TodoItem from './TodoItem';
import useStore from '@/store/store';

const TodoLists = () => {
  const todos = useStore((store) => store.todos);

  return (
    <div className="h-4/6 px-8 borde w-full py-4 rounded-md bg-myaccent space-y-4 overflow-auto no-scroll">
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          task={item.task}
          due={item.due}
          area={item.area}
        />
      ))}
    </div>
  );
};

export default TodoLists;
