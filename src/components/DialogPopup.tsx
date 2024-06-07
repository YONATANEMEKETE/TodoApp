import { Copy, CirclePlus } from 'lucide-react';
import DatePicker from './ui/DatePicker';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import useDialog from '../store/useDialog';

// const todoSchema = z.object({
//   task: z.string(),
//   due: z.string(),
//   area: z.string(),
// });

// type todoSchemaType = z.infer<typeof todoSchema>;

// type DialogProp = {
//   actionButton: string;
//   trigger: React.ReactNode;
// };
// { actionButton, trigger }: DialogProp
function DialogCloseButton() {
  const { isOpen, onClose } = useDialog();
  // const { register, handleSubmit } = useForm<todoSchemaType>({
  //   resolver: zodResolver(todoSchema),
  // });

  return (
    <Dialog onOpenChange={onClose} open={isOpen} defaultOpen={isOpen}>
      <DialogContent className="sm:max-w-md w-max p-8 top-[65%]">
        <DialogHeader>
          <DialogTitle className="text-lg text-mysecondary font-subheader font-semibold">
            let's Add task to your Todo
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mb-4">
          <Input
            placeholder="Meditate"
            className="font-detail text-mysecondary font-semibold"
          />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder="Area of Life"
                className="text-mysecondary font-semibold font-detail"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="Work"
                className="font-detail font-semibold text-mysecondary"
              >
                Work
              </SelectItem>
              <SelectItem
                value="Personal"
                className="font-detail font-semibold text-mysecondary"
              >
                Personal
              </SelectItem>
              <SelectItem
                value="Family"
                className="font-detail font-semibold text-mysecondary"
              >
                Family
              </SelectItem>
            </SelectContent>
          </Select>
          <DatePicker />
        </form>
        <DialogFooter className="justify-center">
          {/* <DialogClose asChild> */}
          <Button
            onClick={onClose}
            type="button"
            className="font-detail rounded-sm"
          >
            confirm
          </Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCloseButton;
