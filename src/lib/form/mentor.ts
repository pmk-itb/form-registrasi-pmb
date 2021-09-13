import client from '../apiClient';
import { MentorDataResponse } from './types/MentorResponse';

const getListOfMentors = async (): Promise<MentorDataResponse> => {
  const response = await client.get('mentors').json<MentorDataResponse>();
  return response;
};

export { getListOfMentors };
