import RoomDetails from '@/components/room/RoomDetails';
import RoomHeader from '@/components/room/RoomHeader';
import { NextPageWithLayout } from './_app';

const Room: NextPageWithLayout = () => {
    return (
        <div className='room'>
            <RoomHeader />
            <RoomDetails />
        </div>
    );
};

export default Room;
