import client from '../apiClient';
import { ChurchResponse } from './types/ChurchResponse';

const getListOfChurches = async (cityId: string): Promise<ChurchResponse> => {
  const response = await client.get(`churches?city_id=${cityId}`).json<ChurchResponse>();
  return response;
};

export { getListOfChurches };
