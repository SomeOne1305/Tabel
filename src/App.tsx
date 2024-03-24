import { Outlet, useNavigation } from "react-router-dom";
import { Loader, Navigation } from "./components";
function App() {
  const navigation = useNavigation()
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="container">
        <div className="py-6"></div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs rounded-t-xl text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Category name
                </th>
                <th scope="col" className="px-6 py-3">
                  Subcategory
                </th>
                <th scope="col" className="px-6 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                navigation.state === "loading" ?
                <Loader/>
                : <Outlet/>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
