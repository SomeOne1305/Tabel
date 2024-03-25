import { useQuery } from 'react-query'
import { fetcher } from '../../services'
import { Column } from '..'
import { IResponse } from '../../interfaces'

const Default = () => {
  const {data, isError, isLoading} = useQuery("categories",async ()=>{
    try {
      const response = await fetcher.get<IResponse>('/category/all')
      return response.data
    } catch (error) {
      throw new Error("Error fetching data")
    }
  })
  
  console.log(data);
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !data || !data.data) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
    {
      data.data.map((item,i)=>(
        <Column key={item.id} index={i+1} category={item.name} subcategory={item.childCategories && item.childCategories.length > 0 ? "yes" : "no"}/>
      ))
    }
    </>
  )
}

export default Default