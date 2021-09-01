import { APIResponse } from '../../apiClient/types/response';

type SchoolData = {
  kode_prop: string;
  propinsi: string;
  kode_kab_kota: string;
  kabupaten_kota: string;
  kode_kec: string;
  kecamatan: string;
  id: string;
  sekolah: string;
  bentuk: string;
  status: string;
};

export type SchoolResponse = APIResponse<SchoolData[]>;
