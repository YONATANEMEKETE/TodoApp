import { AlignJustify, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Dashheading = () => {
  return (
    <div className="w-full px-8 h-1/6 pt-6 flex items-center justify-between">
      <div>
        <span className="text-3xl font-subheader font-extrabold text-mysecondary">
          Welc
          <span className="text-myaccentmain">om</span>
          e.
        </span>
        <div className="text-xl font-detail text-mysecondary font-semibold ml-2">
          june 5, 2024
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <Select>
            <SelectTrigger className="gap-6 rounded-sm bg-primary text-lg text-myprimary text-center">
              <SelectValue className="" placeholder="Today" />
              <ChevronDown className="h-4 w-4 opacity-100" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="text-lg font-semibold font-mysecondary "
                value="All"
              >
                All
              </SelectItem>
              <SelectItem
                className="text-lg font-semibold font-mysecondary "
                value="Today"
              >
                Today
              </SelectItem>
              <SelectItem
                className="text-lg font-semibold font-mysecondary "
                value="Completed"
              >
                Completed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="p-0 rounded-sm border-none  outline-none focus:ring-offset-0 focus:ring-0 text-lg text-myaccentmain text-center">
              <AlignJustify className="size-[2rem] text-mysecondary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="text-base font-semibold font-mysecondary "
                value="Delete"
              >
                Delete
              </SelectItem>
              <SelectItem
                className="text-base font-semibold font-mysecondary pr-2"
                value="Complete"
              >
                Complete
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Dashheading;
