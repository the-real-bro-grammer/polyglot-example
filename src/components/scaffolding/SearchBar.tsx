import { faCalendarAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className='search-bar d-flex align-items-center border rounded-pill shadow-sm px-3'>
            {/* Section 1: Location */}
            <div className='d-flex align-items-center px-2'>
                <FontAwesomeIcon icon={faSearch} className='me-2 text-muted' />
                <span className='me-2'>Anywhere</span>
                <span className='text-muted'>|</span>
            </div>

            {/* Section 2: Date */}
            <div className='d-flex align-items-center px-2'>
                <FontAwesomeIcon icon={faCalendarAlt} className='me-2 text-muted' />
                <span className='me-2'>Any week</span>
                <span className='text-muted'>|</span>
            </div>

            {/* Section 3: Guests */}
            <div className='d-flex align-items-center px-2'>
                <FontAwesomeIcon icon={faUser} className='me-2 text-muted' />
                <span className='me-2'>Add guests</span>
            </div>

            {/* Search Button */}
            <button
                className='btn btn-danger btn-sm rounded-circle ms-2 d-flex align-items-center justify-content-center'
                style={{ width: '35px', height: '35px' }}
            >
                <FontAwesomeIcon icon={faSearch} className='text-white' />
            </button>
        </div>
    );
};

export default SearchBar;
