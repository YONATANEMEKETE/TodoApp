'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import useFormDialog from '@/store/TodoStore';
import useStore from '@/store/store';
const todoSchema = z.object({
  task: z.string(),
  due: z.date(),
  area: z.string(),
});

const TodoForm = () => {
  const { isOpen, onClose } = useFormDialog();
  const { todos, addTodo } = useStore();

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      task: '',
    },
  });

  function onSubmit(values: z.infer<typeof todoSchema>) {
    const data = values;
    // const time = data.due.toDateString();
    addTodo(data);

    onClose();

    // console.log(data);
  }

  return (
    <div
      className={`fixed inset-0 w-full h-full z-20 flex items-center justify-center backdrop-blur-sm ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-myprimary p-8 relative rounded-md shadow-md">
        <div className="text-xl text-mysecondary font-semibold mb-6">
          What's on Your Mind?
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-[20rem]"
          >
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Meditate"
                      className="rounded-sm py-6 text-lg text-mysecondary font-detail font-semibold"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem className="w-9/12">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-lg font-semibold py-6 rounded-sm">
                        <SelectValue placeholder="Area of Life" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        value="Personal"
                        className="text-lg font-semibold"
                      >
                        Personal
                      </SelectItem>
                      <SelectItem
                        value="Work"
                        className="text-lg font-semibold"
                      >
                        Work
                      </SelectItem>
                      <SelectItem
                        value="Family"
                        className="text-lg font-semibold"
                      >
                        Family
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="due"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="w-[20rem] py-6">
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-semibold text-lg',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date('1900-01-01')
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button type="submit" className="text-lg font-semibold w-full py-6">
              Submit
            </Button>
          </form>
        </Form>

        <X
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default TodoForm;
