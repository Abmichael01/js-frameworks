
const QuickLinks = () => {
    const linksStyle = "backdrop-blur-xl cursor-pointer text-xl text-white flex items-center space-x-2 border-2 border-slate-800 px-6 py-2 rounded-[8px] hover:shadow-xl hover:shadow-slate-800 transition-all hover:scale-[1]"
    
    function scrollToFramework(frameworkName) {
      const frameworkElement = document.querySelector(`#${frameworkName}`);
      const scrollPosition = frameworkElement.offsetTop;
      window.scrollTo({ behavior: "smooth", top: scrollPosition - 100 })
      
    }
  return (
    <div className="p-10">
      <div className="flex flex-col">
        <div>
            <h2 className="text-2xl font-bold text-white text-center">Ou<span className="text-sky-400 text-[16px]"><i className="fa-solid fa-bolt"></i></span>ck Links</h2>
        </div>
        <div className="flex items-center flex-wrap gap-5 md:gap-20 mt-5 justify-center">
            <div className={linksStyle} onClick={()=>{scrollToFramework("React")}}>
                <i className="fa-brands fa-react text-sky-400 text-2xl"></i>
                <span>React</span>
            </div>

            <div className={linksStyle} onClick={()=>{scrollToFramework("Angular")}}>
                <i className="fa-brands fa-angular text-sky-400 text-2xl"></i>
                <span>Angular</span>
            </div>

            <div className={linksStyle} onClick={()=>{scrollToFramework("Vue")}}>
                <i className="fa-brands fa-vuejs text-sky-400 text-2xl"></i>
                <span>Vue</span>
            </div>

            {/* <div className={linksStyle}>
                <i class="fa-solid fa-link text-sky-400 text-2xl"></i>
                <span>Svelte</span>
            </div>

            <div className={linksStyle}>
                <i class="fa-solid fa-link text-sky-400 text-2xl"></i>
                <span>Next</span>
            </div> */}

            
        </div>
      </div>
    </div>
  )
}

export default QuickLinks
