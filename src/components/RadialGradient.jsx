

const RadialGradient = () => {
    const size = "900px"
    const backgroundStyle = {
        width: size,
        height: size,
    };
  
    return (
        <div className="fixed top-[30%] rounded-full right-[-350px] z-[-1] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-800 via-slate-900 to-slate-900" style={backgroundStyle}></div>
    );
  };

export default RadialGradient
