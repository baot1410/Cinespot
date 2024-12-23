import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

  useEffect(() => {
    document.title = `PageNotFound`;
  })

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-gray-500 font-bold my-20 text-7xl">404, Page Not Found!</p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Back To Home
          </span>
          </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound