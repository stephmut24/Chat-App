

const Navbar = () => {


  return (
    <div className="navbar bg-base-800 shadow-md px-4">
      <div className="flex-1">
        <a className="text-xl font-bold">Mon Dashboard</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost">🔔 Notifications</button>
        <button className="btn btn-ghost">👤 Profil</button>
      </div>
    </div>
  )
}

export default Navbar