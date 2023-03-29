import { HeaderStyle } from "../styles";
import logo from "../assets/logo.png";

export default function Header({canColor}) {
    function toggleButton() {
        document.getElementsByTagName("button")[0].classList.toggle("active");
        document.getElementsByTagName("nav")[0].classList.toggle("active")
    }

    return (
        <HeaderStyle can={canColor}>
            <section>
                <div className="logo-burger-container">
                    <img src={logo} alt="pepsi logo" />
                    <button onClick={toggleButton}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>What's New</li>
                        <li>Newsletter</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </section>
        </HeaderStyle>
    );
}
