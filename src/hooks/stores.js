import create from 'zustand';

const useStore = create((set) => ({
  employees: [],
  actions: {
    add: (employee) =>
      set((state) => ({ employees: [...state.employees, employee] })),
  },
}));

export const useEmployees = () => useStore((state) => state.employees);
export const useEmployeesActions = () => useStore((state) => state.actions);
