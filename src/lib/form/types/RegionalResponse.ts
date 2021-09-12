import { APIResponse } from '../../apiClient/types/response';

type RegionalData = {
  id: string;
  nama: string;
};

export type RegionalDataResponse = APIResponse<RegionalData[]>;
