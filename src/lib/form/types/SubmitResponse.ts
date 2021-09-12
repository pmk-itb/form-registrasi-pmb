import { APIResponse } from '../../apiClient/types/response';

type Member = {
  id: number;
  nim: string;
  tpbNim: string;
  name: string;
  nickname: string;
  majorId: number;
  gender: string;
  birthDate: string;
  year: number;
  line: string;
  phone: string;
  email: string;
  currentAddress: string;
  originProvince: string;
  originCity: string;
  originAddress: string;
  originSchool: string;
  currentChurch: string;
  originChurch: string;
  status: string;
  notes: string;
  parentId: number;
  discipleshipId: number;
  createdAt: string;
  updatedAt: string;
};

export type SubmitResponse = APIResponse<Member>;
