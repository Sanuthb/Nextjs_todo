
const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full p-5">
      <div className="flex items-center justify-between w-1/2 ">
        <h1 className="text-2xl font-bold">Todo APP</h1>
            <ul className="flex gap-5 font-medium">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
