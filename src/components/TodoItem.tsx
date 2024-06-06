import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import DialogPopup from './DialogPopup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlignJustify, Pen } from 'lucide-react';

type ItemProp = {
  task: string;
  area: string;
};

const TodoItem = ({ task, area }: ItemProp) => {
  return (
    <div className="w-full h-16 bg-myprimary flex items-center justify-between px-4 rounded-md">
      <div className="flex items-center gap-x-4">
        <Checkbox className="size-6 rounded-sm" />
        <div className="text-xl font-detail text-mysecondary font-bold">
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
            20, june
          </Button>

          <DialogPopup
            actionButton="Confirm"
            trigger={
              <Button
                size="icon"
                variant="secondary"
                className="size-6 flex place-content-center text-sm rounded-s-sm"
              >
                <Pen className="size-4 text-mysecondary" />
              </Button>
            }
          />
        </div>

        <Select>
          <SelectTrigger className="p-0 rounded-sm border-none  outline-none focus:ring-offset-0 focus:ring-0 text-lg text-myaccentmain text-center">
            <AlignJustify className="size-[1.5rem] text-mysecondary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              className="text-base font-semibold font-mysecondary pr-2"
              value="Complete"
            >
              Complete
            </SelectItem>
            <SelectItem
              className="text-base font-semibold font-mysecondary pr-2"
              value="Delete"
            >
              Delete
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TodoItem;
