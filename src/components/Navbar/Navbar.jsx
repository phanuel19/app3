import { FaInfoCircle, FaDatabase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { GrAction } from "react-icons/gr";
import './navbar.css'
function Navbar() {
    return (
        <nav>
                <h1 className="logo">NOVA</h1>
            <ul>
                <li><FaInfoCircle /><a href="#about"></a>About</li>
                <li><FaDatabase /><a href="#dataCharts"></a>Data</li>
                <li><FaLightbulb /><a href="#advices"></a>Recommendations</li>
                <li><GrAction /><a href="#controlButtons"></a>Actions</li>
            </ul>
        </nav>
    )
}

export default Navbar
