import client from '../apiClient';
import { RegionalDataResponse } from './types/RegionalResponse';

const getListOfProvinces = async (): Promise<RegionalDataResponse> => {
  const response = await client.get('provinces').json<RegionalDataResponse>();
  return response;
};

const getListOfCities = async (provinceId: string): Promise<RegionalDataResponse> => {
  const response = await client.get(`cities?province_id=${provinceId}`).json<RegionalDataResponse>();
  return response;
};

export { getListOfProvinces, getListOfCities };
