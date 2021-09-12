import client from '../apiClient';
import { SchoolResponse } from './types/SchoolResponse';

const getListOfSchools = async (cityId: string): Promise<SchoolResponse> => {
  const response = await client.get(`schools?city_id=${cityId}`).json<SchoolResponse>();
  return response;
};

export { getListOfSchools };
