import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="ar-header">
        <ul id="ar-ul">
            <li>Logo</li>
            <li>
                <nav className="ar-nav">
                    <ul>
                        <li>HOME</li>
                        <li>PROJECTS</li>
                        <li>ABOUT ME</li>
                        <li>HIRE ME</li>
                    </ul>
                </nav>
            </li>
        </ul>
      </header>
    </>
  );
};
