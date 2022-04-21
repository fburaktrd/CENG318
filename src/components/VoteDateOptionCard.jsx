import {
  CheckIcon,
  XIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function VoteDateOption({ func, optInfo }) {
  // console.log(optInfo,"eventPage")

  const a = () => {
    func(optInfo);
  };
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <span className="px-3 bg-white text-lg font-medium text-gray-900">
        Date Options{" "}
      </span>
      {people.map((person) => (
        <li
          key={optInfo.id}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 mt-4"
        >
          <StarIcon className="w-10 h-10 text-gray-400 mx-auto" aria-hidden="true" />
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {optInfo.id}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {optInfo.date}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <CheckIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <XIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
