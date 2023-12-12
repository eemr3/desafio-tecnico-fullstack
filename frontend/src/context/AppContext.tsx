import { createContext, useEffect, useState } from 'react';
import {
  AppContextProps,
  AppProviderProps,
  IAddNewTypeProfessional,
  IGetProfessional,
  IProfessional,
  ITypeProfessional,
  IUpdateProfessional,
  IUpdateTypeProfessional,
} from '../common/interfaces';
import { http } from '../services/http';
import { AxiosError } from 'axios';

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const [open, setOpen] = useState(false);
  const [professionalIdDelete, setProfessionalIdDelete] = useState(0);
  const [getAllProfessional, setGetAllProfessional] = useState<IGetProfessional[] | null>(
    null,
  );
  const [addAndUpdateProfessional, setAddAndUpdateProfessional] = useState(false);

  const [getAllTypeProfessional, setGetAllTypeProfessional] = useState<
    ITypeProfessional[] | null
  >(null);

  const [addAndUpdateTypeProfessional, setAddAndUpdateTypeProfessional] = useState(false);

  useEffect(() => {
    const getTypeProfessionals = async () => {
      const response = await http.get('/type-professionals');
      setGetAllTypeProfessional(response.data);
    };

    const getProfessionals = async () => {
      const response = await http.get('/professionals');
      setGetAllProfessional(response.data);
    };

    getProfessionals();
    getTypeProfessionals();
  }, [addAndUpdateProfessional, addAndUpdateTypeProfessional]);

  const addNewTypeProfessional = async (data: IAddNewTypeProfessional) => {
    try {
      const response = await http.post('/type-professionals', {
        type: data.title,
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      throw error.response?.status;
    }
  };

  const updateTypeProfessional = async (data: IUpdateTypeProfessional) => {
    try {
      const response = await http.patch(`/type-professionals/${data.id}`, {
        type: data.type,
        isActived: data.isActived === 'SIM' ? true : false,
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      throw error.response?.status;
    }
  };

  const getTypeProfessionalById = async (id: number) => {
    try {
      const response = await http.get(`/type-professionals/${id}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      throw error.response?.status;
    }
  };

  const createNewProfessional = async (data: IProfessional) => {
    try {
      const response = await http.post('/professionals', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        typeProfessionalId: Number(data.typeProfessionalId),
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      throw error.response?.status;
    }
  };

  const getProfessionalById = async (id: number) => {
    try {
      const response = await http.get(`/professionals/${id}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      throw error.response?.status;
    }
  };

  const updateProfessinal = async (data: IUpdateProfessional) => {
    try {
      const response = await http.patch(`/professionals/${data.typeProfessionalId}`, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        isActived: data.isActived === 'SIM' ? true : false,
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      throw error.response?.status;
    }
  };

  const removeProfessionalById = async (id: number) => {
    try {
      await http.delete(`/professionals/${id}`);
    } catch (err) {
      const error = err as AxiosError;
      throw error.response?.status;
    }
  };

  return (
    <AppContext.Provider
      value={{
        getAllTypeProfessional,
        setGetAllTypeProfessional,
        createNewProfessional,
        getAllProfessional,
        setGetAllProfessional,
        addAndUpdateProfessional,
        setAddAndUpdateProfessional,
        getProfessionalById,
        updateProfessinal,
        removeProfessionalById,
        open,
        setOpen,
        professionalIdDelete,
        setProfessionalIdDelete,
        addNewTypeProfessional,
        addAndUpdateTypeProfessional,
        setAddAndUpdateTypeProfessional,
        updateTypeProfessional,
        getTypeProfessionalById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
