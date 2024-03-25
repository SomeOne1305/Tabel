import React from 'react'
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

export interface IContext{
  theme:"dark"|"light",
  setTheme:React.Dispatch<React.SetStateAction<"light"|"dark">>
}