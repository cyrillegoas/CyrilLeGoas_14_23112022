import create from 'zustand';
import { peoples } from '../mockData';

const useStore = create((set) => ({
  employees: peoples,
  actions: {
    add: (employee) =>
      set((state) => ({ employees: [...state.employees, employee] })),
  },
}));

export const useEmployees = () => useStore((state) => state.employees);
export const useEmployeesActions = () => useStore((state) => state.actions);
