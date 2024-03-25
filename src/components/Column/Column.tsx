import { FC } from "react";

type Props={
  index:number,
  category:string,
  subcategory:string
}

const Column :FC<Props> = ({index,category,subcategory}) => {

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index}
        </th>
        <td className="px-6 py-4">{category}</td>
        <td className="px-6 py-4">{subcategory}</td>
        <td className="px-6 py-4">...</td>
      </tr>
    </>
  );
};

export default Column;
