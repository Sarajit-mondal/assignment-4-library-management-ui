// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink} from "react-router";
import { Menu, X } from "lucide-react";   

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-4 py-2 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900";
  const linkActive = "text-indigo-600 dark:text-indigo-400";

  return (
    <header className="bg-white shadow dark:bg-gray-900">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* brand / logo */}
          <NavLink to="/" className="text-xl font-semibold text-indigo-600">
            📚 Library
          </NavLink>

          {/* mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* desktop links */}
          <ul className="hidden sm:flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                AllBooks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addbook"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                AddBook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/borrow-summary"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                BorrowSummary
              </NavLink>
            </li>
            <li>
              <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2pDk4WwmtUL36r0uiQeqLtHIQMrBO0ZFt5hMUWBQsW-B5et8sVzuZUTBX_wvo_9-qbm08o2iUxHXg-WU2oH45PTP-KwMl4cyMVLxX6bOnbA3T9EAsolflAQLxmQOHdLjGAxgVGSWDV8lR8GIJ7fZ1XSNqvagLbBWhKvVkPSQjCD_wXP6lDN_2pcUZujhWfv2-Bk7cLZdsl7Ud9E8RMzjAKMAdTTrm_bxulEQB2vj-x9TBOXPde4EZDltuaVFpubB7Cf0DhFhqxXc")'
              }}
            ></div>
            </li>
          </ul>
        </div>

        {/* mobile dropdown */}
        {open && (
          <ul className="sm:hidden pb-4 border-t dark:border-gray-700">
            {[
              { to: "/", label: "All Books" },
              { to: "/addbook", label: "Add Book" },
              { to: "/borrow-summary", label: "Borrow Summary" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
