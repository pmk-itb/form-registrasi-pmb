import client from '../apiClient';
import { SubmitResponse } from './types/SubmitResponse';

type FormSubmitData = {
  nim: string;
  name: string;
  nickname: string;
  majorId: number;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  line: string;
  phone: string;
  email: string;
  originProvince: string;
  originCity: string;
  originSchool: string;
  originChurch: string;
  parentPhone: string;
  parentRelationship: 'AYAH' | 'IBU' | 'WALI' | 'KAKAK' | 'ADIK' | 'BIBI' | 'PAMAN' | 'KAKEK' | 'NENEK' | 'OTHER';
  discipleshipId: number;
};

const submitForm = (data: FormSubmitData): Promise<SubmitResponse> => {
  return client
    .post('members', {
      json: data,
    })
    .json();
};

export default submitForm;
