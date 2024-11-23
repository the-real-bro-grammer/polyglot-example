import Logo from './Logo';
import SearchBar from './SearchBar';
import UserOptions from './UserOptions';

const AirbnbHeader = () => {
    return (
        <header className='header d-flex align-items-center justify-content-between px-4 py-2 border-bottom'>
            <Logo />
            <SearchBar />
            <UserOptions />
        </header>
    );
};

export default AirbnbHeader;
