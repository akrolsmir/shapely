import { CalendarIcon, CogIcon, UsersIcon } from '@heroicons/react/outline'

// From https://codepen.io/chris__sev/pen/QWGvYbL
export default function BottomNavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-between border-t-2 bg-white text-xs text-gray-700">
      <a
        href="#"
        className="block w-full py-2 px-3 text-center transition duration-300 hover:bg-indigo-200 hover:text-indigo-700"
      >
        <CalendarIcon className="my-1 mx-auto h-6 w-6" aria-hidden="true" />
      </a>

      <a
        href="#"
        className="block w-full py-2 px-3 text-center hover:bg-indigo-200 hover:text-indigo-700"
      >
        <UsersIcon className="my-1 mx-auto h-6 w-6" aria-hidden="true" />
      </a>

      <a
        href="#"
        className="block w-full py-2 px-3 text-center hover:bg-indigo-200 hover:text-indigo-700"
      >
        <CogIcon className="my-1 mx-auto h-6 w-6" aria-hidden="true" />
      </a>
    </nav>
  )
}
