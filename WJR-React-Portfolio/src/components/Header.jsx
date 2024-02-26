function Header(props) {
    const handleLinkClick = e => {
        e.preventDefault();
  
        props.setPage(e.target.innerText.toLowerCase())
    }

    return (
      <header>
        <nav className="nav-list">
            <h1 className="logo">Winston James Jr</h1>
            <img src="\WJR-React-Portfolio\src\assets\Professional Image.jpg" alt="" />
            <ul>
                <li className="nav-link"><a onClick={handleLinkClick} href="/" className={props.page === 'aboutme' ? 'active' : ''}>About Me</a></li>
                <li className="nav-link"><a onClick={handleLinkClick} href="/work" className={props.page === 'work' ? 'active' : ''}>Work</a></li>
                <li className="nav-link"><a onClick={handleLinkClick} href="/contact" className={props.page === 'contact' ? 'active' : ''}>Contact Me</a></li>
                <li className="nav-link"><a onClick={handleLinkClick} href="/resume" className={props.page === 'resume' ? 'active' : ''}>Resume</a></li>
            </ul>
        </nav>
      </header>
    )
  }

export default Header