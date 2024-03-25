export interface ICategory{
  id:number,
  name:string
  childCategories:[]|ICategory[]
}

export interface IResponse{
  success:boolean,
  code:number,
  errors:null|any,
  message:null|any,
  errorResponse:null|any,
  data:ICategory[]
}