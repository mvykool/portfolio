export interface FileType {
  type: string;
  duration: number;
  name?: string;
  color?: string;
}

export interface CodingData {
  total_duration: number;
  file_types: FileType[];
}
