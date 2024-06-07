import { create } from 'zustand';

interface DialogProp {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  setData: (newdata: any) => void;
}

const useDialog = create<DialogProp>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
  data: {},
  setData: (newdata) => {
    set({ data: newdata });
  },
}));

export default useDialog;
