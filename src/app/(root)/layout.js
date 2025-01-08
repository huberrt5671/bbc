import Navbar from "@/app/components/Navbar"
import Mobilenav from "../components/Mobilenav"

const layout = ({children}) => {
  return (
    <div>
      <Mobilenav />
     <Navbar /> 
    {children}
    </div>
  )
}

export default layout