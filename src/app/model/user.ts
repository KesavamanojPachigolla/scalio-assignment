export class User {
  avatar_url: string;
  login: string;
  type: string;
}

export class ResponseModel {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
