

const ScrollUpButt = () => {
    const scrollUpButt = document.querySelector("#scrollUp")

     if(scrollUpButt){
        window.addEventListener("scroll", ()=>{
          if(window.scrollY > 700){
            scrollUpButt.style.display = "flex"
            // scrollUpButt.style.opacity = "1"

          }else{
            scrollUpButt.style.display = "none"
          }
      }) 
     }
     
     const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
       })
    }
  return (
    <div>
      <div id="scrollUp" onClick={scrollToTop}  className=" transition-all duration-1000 ease-in-out cursor-pointer w-20 h-20 flex justify-center items-center rounded-full fixed bottom-10 right-10  backdrop-blur-2xl shadow-lg shadow-sky-600 z-20">
        <i className="fa-solid fa-arrow-up text-sky-400 text-2xl"></i>
      </div>
    </div>
  )
}

export default ScrollUpButt
