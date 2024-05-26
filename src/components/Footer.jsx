

const Footer = () => {
    function scrollToFramework(frameworkName) {
        const frameworkElement = document.querySelector(`#${frameworkName}`);
        const scrollPosition = frameworkElement.offsetTop;
        window.scrollTo({ behavior: "smooth", top: scrollPosition - 100 })
        
      }
    const linksStyle = "cursor-pointer text-md text-white flex items-center space-x-2"
  return (
    <div>
      <div id="footer" className="flex flex-col md:flex-row items-start gap-10 md:gap-20 px-10 py-10 pb-20 bg-[#00000098] backdrop-blur-md">
        <div className="flex space-x-2 items-center text-2xl font-bold">
            <i className="fa-solid fa-code text-sky-400"></i>
            <h2 className="text-white">JsFrameworks</h2>
        </div>
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl text-sky-400">
                Frameworks
            </h2>
            <div className="flex flex-col gap-5">
                <div className={linksStyle} onClick={()=>{scrollToFramework("React")}}>
                    <i className="fa-brands fa-react text-sky-400 text-xl"></i>
                    <span>React</span>
                </div>

                <div className={linksStyle} onClick={()=>{scrollToFramework("Angular")}}>
                    <i className="fa-brands fa-angular text-sky-400 text-xl"></i>
                    <span>Angular</span>
                </div>

                <div className={linksStyle} onClick={()=>{scrollToFramework("Vue")}}>
                    <i className="fa-brands fa-vuejs text-sky-400 text-xl"></i>
                    <span>Vue</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl text-sky-400">
                Contact Developer
            </h2>
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                    <i className="fa-solid fa-envelope text-sky-400 text-xl"></i>
                    <a href="mailto:urkelcodes7@gmail.com?subject=From JsFrameworks Website" className="text-md text-white">urkelcodes7@gmail.com</a>
                </div>
                <div className="flex gap-2 items-center">
                    <i className="fa-solid fa-phone text-sky-400 text-xl"></i>
                    <a href="tel:+2349160914217" className="text-md text-white">+2349160914217</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
