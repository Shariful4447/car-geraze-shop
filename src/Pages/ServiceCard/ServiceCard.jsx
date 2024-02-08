import { Card } from 'antd';
const { Meta } = Card;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div>
            <Card
            className='w-[380px] m-5'
            hoverable
            
            cover={<img className='border-2 p-3 rounded-xl border-white' alt="example" src={img} />}
        >
            <Meta className='text-3xl' title={title} />
            <div className='flex justify-between'><p className='text-xl mt-3 text-red-500'>Price : {price}</p>
                <Link to={`/checkout/${_id}`}>
                    <button><ArrowForwardIcon className='text-2xl text-red-500'/></button>
                </Link>
            </div>
        </Card>
            
        </div>
    );
};

export default ServiceCard;