import todoLogo from '../assets/todoLogo.png';
import Navigation from './Navigation';
import { Button } from './ui/button';
import { Home, CirclePlus, Grip, ListCollapse } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className=" h-full basis-1/4 rounded-lg flex flex-col justify-between items-center bg-myprimary">
      <div className="h-4/5 w-full">
        <div className="logo w-full h-1/5 border-b flex pl-12 gap-x-2 items-center">
          <div className="size-[3rem]  overflow-hidden">
            <img
              src={todoLogo}
              className="w-full h-full object-cover object-center"
              alt="logo"
            />
          </div>
          <div className="text-4xl text-mysecondary font-header font-bold">
            Todo.
          </div>
        </div>
        <div className="h-4/5 pt-6 flex flex-col items-start gap-y-2">
          <Navigation
            child={<Home className="mr-2 size-6 font-bold" />}
            text="Home"
          />
          <Navigation
            child={<Grip className="mr-2 size-6 font-bold" />}
            text="Catagories"
          />
          <Navigation
            child={<ListCollapse className="mr-2 size-6 font-bold" />}
            text="Details"
          />
        </div>
      </div>
      <div className="w-3/4 mb-8">
        <Button
          size="lg"
          className="w-full text-lg font-header font-semibol text-myprimary 
          flex items-center justify-center gap-x-2 pl-0"
        >
          Add Todo <CirclePlus className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
