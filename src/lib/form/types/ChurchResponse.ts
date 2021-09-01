import { APIResponse } from '../../apiClient/types/response';

type ChurchData = {
  id: string;
  churches: string[] | [];
};

export type ChurchResponse = APIResponse<ChurchData>;
