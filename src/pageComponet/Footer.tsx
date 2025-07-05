import { NavLink } from "react-router-dom"


function Footer() {
  return (
    <div>
        <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6 max-w-6xl mx-auto">
  <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
    {/* Left side: copyright */}
    <div className="text-center sm:text-left w-full sm:w-auto">
      © {new Date().getFullYear()}{" "}
      <span className="font-medium text-gray-700 dark:text-gray-300">
        LibraryApp
      </span>
      . All rights reserved.
    </div>

    {/* Right side: nav links + profile */}
    <div className="flex items-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:underline ${isActive ? "text-indigo-600 font-medium" : ""}`
        }
      >
        AllBooks
      </NavLink>
      <NavLink
        to="/addbook"
        className={({ isActive }) =>
          `hover:underline ${isActive ? "text-indigo-600 font-medium" : ""}`
        }
      >
        AddBook
      </NavLink>
      <NavLink
        to="/borrow-summary"
        className={({ isActive }) =>
          `hover:underline ${isActive ? "text-indigo-600 font-medium" : ""}`
        }
      >
        BorrowSummary
      </NavLink>

      {/* Profile avatar */}
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-4"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2pDk4WwmtUL36r0uiQeqLtHIQMrBO0ZFt5hMUWBQsW-B5et8sVzuZUTBX_wvo_9-qbm08o2iUxHXg-WU2oH45PTP-KwMl4cyMVLxX6bOnbA3T9EAsolflAQLxmQOHdLjGAxgVGSWDV8lR8GIJ7fZ1XSNqvagLbBWhKvVkPSQjCD_wXP6lDN_2pcUZujhWfv2-Bk7cLZdsl7Ud9E8RMzjAKMAdTTrm_bxulEQB2vj-x9TBOXPde4EZDltuaVFpubB7Cf0DhFhqxXc")',
        }}
      ></div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
