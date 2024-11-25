import ImageGrid from './ImageGrid';
import TitleAndShare from './TitleAndShare';

const RoomHeader = () => {
    return (
        <section className='room-header mt-4'>
            <TitleAndShare />
            <ImageGrid />
        </section>
    );
};

export default RoomHeader;
