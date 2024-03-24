import { useParams } from "react-router-dom";

const Column = () => {
  const params = useParams<{id?:string,subId?:string}>()
  console.log(params);
  
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          1
        </th>
        <td className="px-6 py-4">Smartphones</td>
        <td className="px-6 py-4">true</td>
        <td className="px-6 py-4">...</td>
      </tr>
    </>
  );
};

export default Column;
