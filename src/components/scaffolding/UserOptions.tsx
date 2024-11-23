import { faGlobe, faList, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserOptions = () => {
    return (
        <div className='right-menu d-flex align-items-center'>
            <span className='me-3'>Airbnb your home</span>
            <FontAwesomeIcon icon={faGlobe} className='me-3' />
            <div className='menu-button d-flex align-items-center border rounded-pill px-2 py-1'>
                <FontAwesomeIcon icon={faList} className='me-2' />
                <FontAwesomeIcon icon={faUserCircle} />
            </div>
        </div>
    );
};

export default UserOptions;
