export default function LoginForm() {
  return (
    <div className="w-full max-w-xs">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
            Username
          </label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***************" />
          <p className="text-xs italic text-red-500">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
