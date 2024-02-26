import { createContext, useContext, useState } from 'react';
import NavBar from './NavBar';


type NavBarContextType = boolean;

const SideBarContext = createContext<NavBarContextType>(true);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState();

  console.log(typeof(isOpen),"What isOpen?")
  console.log(typeof(setIsOpen),"What isSetIsOpen?")




  return (
    <SideBarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SideBarContext.Provider>
  );
}

function SidebarNav() {
  // let { isOpen } = useContext(SideBarContext);

  return (
    <div>
    <h1>Looking for the open setOpen!!!!</h1>

      {/* {isOpen && <NavBar />} */}
    </div>
  );
}
