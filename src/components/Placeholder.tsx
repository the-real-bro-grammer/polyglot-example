import { FC } from 'react';

interface PlaceholderProps {
    width: number;
    height: number;
    alt?: string;
}

const PlaceholderImage: FC<PlaceholderProps> = (props: PlaceholderProps) => {
    return <img src={`https://placehold.co/${props.width}x${props.height}`} alt={props.alt} className='img-fluid' />;
};

export default PlaceholderImage;
