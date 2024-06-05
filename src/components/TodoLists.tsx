import TodoItem from './TodoItem';

const TodoLists = () => {
  return (
    <div className="h-4/6 px-8 borde w-full py-4 rounded-md bg-myaccent space-y-4 overflow-auto no-scroll">
      <TodoItem task="Meditate" area="personal" />
      <TodoItem task="Physical Exercise" area="gym" />
      <TodoItem task="Study" area="work" />
    </div>
  );
};

export default TodoLists;
