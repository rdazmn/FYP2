
import './App.css';
import {Link} from 'react-router-dom';


function Navigator() {
  return (
    <div className="Navigator">
        <nav>

            <h2>Anomaly-sms-service</h2>
            <ul className="nvlink">
                <Link to="/"><li>Home</li></Link>
                <Link to="/batch_file"><li>File Service</li></Link>
            </ul>

        </nav>
       
    </div>
  );
}

export default Navigator;
