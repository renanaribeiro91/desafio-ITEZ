export enum Categories {
  Entretenimento = "Entretenimento",
  Alimentação = "Alimentação",
  Educação = "Educação",
  Saúde = "Saúde",
  Transporte = "Transporte",
}
export interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  cod_receita: number;
  cod_despesa: number;
}

export interface IExpensesRequest {
  id: string;
  cod_despesas: number;
  categories?: string;
}

export interface IRecipesRequest {
  id: string;
  cod_receitas: number;
  desc_receitas: string;
}
