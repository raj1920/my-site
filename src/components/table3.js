import Switch from "./switch";

const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  
  export default function Table3() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department/Role Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Access Level
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Summary
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Updated
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Budget
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            All Access
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span>View|Create|Edit|Delete</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                           <img src="https://img.icons8.com/windows/32/26e07f/toggle-on.png"alt="img"/>
                          </a>
                        </td>
                        </tr>
                      
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Bidding
                              </div>
                            </div>
                          </div>
                        </td>
                        
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-500">
                            
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span></span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <img src="https://img.icons8.com/windows/32/26e07f/toggle-on.png"alt="img"/>
                          </a>
                        </td> 
                        
                        </tr>
                      
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Vendor Portal
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                            Restricted Access
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span>View|Create</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <img src="https://img.icons8.com/windows/32/26e07f/toggle-on.png"alt="img"/>
                          </a>
                        </td>
                       </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Purchase Order/ Work Book
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                            Restricted Access
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span>View|Create</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Switch />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Permission & Access Control
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-500">
                            No Access
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span>-</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Switch />
                        </td>
                      </tr>
                      <tr>
                      
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Organisation Profile
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            All Access
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span>View|Create|Edit|Delete</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          <span>1 min ago</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <img src="https://img.icons8.com/windows/32/26e07f/toggle-on.png"alt="img"/>
                          </a>
                        </td>
                      </tr>

                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }