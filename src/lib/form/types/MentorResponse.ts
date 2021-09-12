import { APIResponse } from '../../apiClient/types/response';

type MentorData = {
  id: string;
  leaderName: string;
};

export type MentorDataResponse = APIResponse<MentorData[]>;
