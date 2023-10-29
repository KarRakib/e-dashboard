const { create } = require('zustand');

const useProductModal = create((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  onOpen: () => set({ isOpen: true }),
  onEdit: (id) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
}));

module.exports = { useProductModal };