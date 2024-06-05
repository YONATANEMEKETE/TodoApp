import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlignJustify, ChevronDown } from 'lucide-react';
import Dashheading from './Dashheading';
import TodoLists from './TodoLists';

const DashBoard = () => {
  return (
    <div className="relative rounded-lg h-full basis-3/4 bg-myprimary p-6">
      <div className="size-full flex flex-col gap-y-16">
        <Dashheading />
        <TodoLists />
      </div>
    </div>
  );
};

export default DashBoard;
