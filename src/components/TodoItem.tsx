import React, { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import DialogPopup from './DialogPopup';
import { CircleX } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlignJustify, Pen } from 'lucide-react';
import useDialog from '@/store/useDialog';
import useStore from '@/store/store';
import useFormDialog from '@/store/TodoStore';
import { Item } from '@radix-ui/react-select';

type ItemProp = {
  task: string;
  area: string;
  due: string;
};

const TodoItem = ({ task, area, due }: ItemProp) => {
  const { isOpen, onOpen } = useFormDialog();
  const { todos, removeTodo, toggleCompletedState } = useStore();
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    toggleCompletedState(task);
    todos.map((item) => {
      item.task === task ? setComplete(!complete) : null;
    });
  };

  return (
    <div className="w-full h-16 bg-myprimary flex items-center justify-between px-4 rounded-md">
      <div className="flex items-center gap-x-4">
        <Checkbox
          checked={complete}
          className="size-6 rounded-sm"
          onClick={handleComplete}
        />
        <div
          className={`text-xl font-detail text-mysecondary font-bold ${
            complete && 'line-through'
          }`}
        >
          {task}
        </div>
      </div>

      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2">
          <Badge
            variant="secondary"
            className="px-6 py-1 text-base text-mysecondary font-detail rounded-sm font-semibold"
          >
            {area}
          </Badge>

          <Button
            variant="secondary"
            size="sm"
            className="text-[1rem] text-mysecondary font-subheader font-semibold"
          >
            {due}
          </Button>

          {/* <Button
            onClick={onOpen}
            size="icon"
            variant="secondary"
            className="size-6 flex place-content-center text-sm rounded-s-sm"
          >
            <Pen className="size-4 text-mysecondary" />
          </Button> */}
        </div>

        <CircleX
          onClick={() => removeTodo(task)}
          className="text-[1.75rem] text-mysecondary font-bold cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItem;
