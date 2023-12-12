import { ReactNode } from 'react';

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextProps {
  getAllTypeProfessional: ITypeProfessional[] | null;
  setGetAllTypeProfessional: (typeProfessional: ITypeProfessional[]) => void;
  createNewProfessional: (professional: IProfessional) => Promise<IProfessional>;
  getAllProfessional: IGetProfessional[] | null;
  setGetAllProfessional: (professional: IGetProfessional[]) => void;
  addAndUpdateProfessional: boolean;
  setAddAndUpdateProfessional: (value: boolean) => void;
  getProfessionalById: (id: number) => Promise<IGetProfessional>;
  updateProfessinal: (professional: IUpdateProfessional) => Promise<IProfessional>;
  removeProfessionalById: (id: number) => Promise<void>;
  open: boolean;
  setOpen: (value: boolean) => void;
  professionalIdDelete: number;
  setProfessionalIdDelete: (id: number) => void;
  addNewTypeProfessional: (
    typeProfessional: IAddNewTypeProfessional,
  ) => Promise<ITypeProfessional>;
  addAndUpdateTypeProfessional: boolean;
  setAddAndUpdateTypeProfessional: (value: boolean) => void;
  updateTypeProfessional: (data: IUpdateTypeProfessional) => Promise<ITypeProfessional>;
  getTypeProfessionalById: (id: number) => Promise<ITypeProfessional>;
}

export interface ITypeProfessional {
  id?: number;
  type: string;
  isActived?: boolean;
}

export interface IProfessional {
  id?: number;
  name: string;
  email: string;
  phone: string;
  typeProfessionalId: string;
  typeProfessional?: ITypeProfessional;
}

export interface IAddNewTypeProfessional {
  title: string;
}

export interface IUpdateTypeProfessional {
  id?: number;
  type: string;
  isActived: string;
}

export interface IUpdateProfessional extends IProfessional {
  isActived: string;
}

export interface IGetProfessional extends IProfessional {
  id?: number;
  name: string;
  email: string;
  phone: string;
  isActived?: boolean;
  typeProfessionalId: string;
  typeProfessional?: ITypeProfessional;
}
