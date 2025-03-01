import { Link } from "react-scroll"


export default function NavBar() {
  return (
    <div className="w-full h-20 flex items-center justify-center gap-3 text-white bg-black fixed">
      <Link to="blue" smooth="true" duration={ 300 } className="cursor-pointer">Blue</Link>
      <Link to="green" smooth="true" duration={ 300 } className="cursor-pointer">Green</Link>
      <Link to="red" smooth="true" duration={ 300 } className="cursor-pointer">Red</Link>
      <Link to="yellow" smooth="true" duration={ 300 } className="cursor-pointer">Yellow</Link>
    </div>
  )
}
