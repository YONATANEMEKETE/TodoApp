import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlignJustify, ChevronDown } from 'lucide-react';
import Dashheading from './Dashheading';

const DashBoard = () => {
  return (
    <div className=" rounded-lg h-full basis-3/4 bg-myprimary p-6">
      <div className=" size-full">
        <Dashheading />
        <div></div>
      </div>
    </div>
  );
};

export default DashBoard;
