import { requestPhrase } from '@/redux/i18n/actions';
import I18nState from '@/types/redux/i18n/state';
import { RootState } from '@/types/redux/root_state';
import { faCalendarAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface SearchBarProps {
    requestPhrase: (key: string) => void;
    i18nState: I18nState;
}

const phraseKey = 'searchBar';
const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
    if (!props.i18nState.polyglot.has(phraseKey)) {
        props.requestPhrase(phraseKey);
    }

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

const mapStateToProps = (state: RootState) => {
    return {
        i18nState: state.i18nState
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestPhrase: (key: string) => dispatch(requestPhrase(key))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
