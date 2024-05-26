
const Header = () => {
  function scrollToFramework(frameworkName) {
    const frameworkElement = document.querySelector(`#${frameworkName}`);
    const scrollPosition = frameworkElement.offsetTop;
    window.scrollTo({ behavior: "smooth", top: scrollPosition - 50 })
    
  }

  const nav = document.querySelector("#nav")

  const showNav = ()=>{
    nav.style.right = "0px"
    // nav.classList.remove("toggle-nav")
  }

  const hideNav = ()=>{
    nav.style.right = "-300px"
    // nav.classList.add("toggle-nav")
  }

  const borderRadius = {
    borderRadius: "0% 54% 22% 20% / 25% 30% 25% 25%"
  }
  const aClass = "text-sm text-slate-500 font-semibold hover:text-slate-400 transition duration-300 cursor-pointer"
  return (
    <div className="md:px-10 px-4 py-4 flex justify-between items-center border-b border-slate-700 fixed top-0 right-0 left-0 z-10 backdrop-blur-lg">
      <div className="flex space-x-2 items-center text-2xl font-bold">
        <i className="fa-solid fa-code text-sky-400"></i>
        <h2 className="text-white">JsFrameworks</h2>
      </div>
      
      <nav id="nav" className=" right-[-300px] transition-all duration-300 p-5 fixed top-0 bottom-0 w-[200px] backdrop-blur-sm bg-slate-800 flex flex-col gap-[30px] border-l border-slate-700 h-[100vh] md:items-center md:flex md:relative md:h-fit md:right-[0px] md:flex-row md:bg-inherit md:w-fit md:border-0 md:p-0">
        <div onClick={hideNav} className="menu px-3 py-2 border-[3px] cursor-pointer md:hidden hover:border-slate-500 hover:text-sky-500 transition-all border-slate-700 text-xl text-sky-400 w-fit" style={borderRadius} >
          <i class="fa-solid fa-x"></i>
        </div>
        <a className={aClass} onClick={()=>{scrollToFramework("Hero")}}>Home</a>
        <a className={aClass} onClick={()=>{scrollToFramework("footer")}}>Contact Dev</a>
        <a className={aClass}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </nav>
      <div onClick={showNav} className="menu px-3 py-2 border-[3px] cursor-pointer md:hidden hover:border-slate-800 hover:text-sky-500 transition-all border-slate-700 text-xl text-sky-400" style={borderRadius} >
          <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Header
