import { create } from 'zustand';

type FormProp = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useFormDialog = create<FormProp>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));

export default useFormDialog;
