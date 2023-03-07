const Nav = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
  
    return (
      <header className="fixed w-full z-50 mx-auto pt-4 top-0 backdrop-blur-sm bg-primary/30">
        <nav className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2">
          <div onClick={scrollToTop} className="sm:flex hidden">
            Startsida
          </div>
          <div className="sm:flex hidden">Artiklar</div>
          <div className="sm:flex hidden">Om oss</div>
          <div>Logga in</div>
        </nav>
      </header>
    );
  };
  
  export default Nav;  