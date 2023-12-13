import "./styles.scss";
import Menu from '../Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface PropTypes {
  title: string;
  showButton?: boolean;
  onButtonClick?: Function
}

const Header = ({ title, showButton, onButtonClick }: PropTypes) => {

  return (
    <header>
      {showButton && <div onClick={() => { onButtonClick && onButtonClick(); }} data-testid="back-button" className="button"><FontAwesomeIcon icon={faArrowLeft} /></div>}
      <h1>{title}</h1>
      <Menu />
    </header>
  );
};

export default Header;
