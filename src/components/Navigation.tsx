import { Ghost, Home } from 'lucide-react';
import { Button } from './ui/button';

type NavProp = {
  text: string;
  child: React.ReactNode;
};

const Navigation = ({ text, child }: NavProp) => {
  return (
    <div className="mx-auto w-3/4 ">
      <Button
        variant="ghost"
        size="lg"
        className="w-full rounded-none bg-accent hover:bg-mysecondary transition
        duration-300 text-mysecondary hover:text-myprimary font-medium 
        font-header text-lg flex items-center justify-start active:scale-75"
      >
        {child} {text}
      </Button>
    </div>
  );
};

export default Navigation;
