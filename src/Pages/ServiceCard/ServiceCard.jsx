import { Card } from 'antd';
const { Meta } = Card;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = ({service}) => {
    const {img, title, price} = service;
    return (
        <div>
            <Card
            className='w-[360px] m-5'
            hoverable
            
            cover={<img className='border-2 p-5 rounded-xl border-white' alt="example" src={img} />}
        >
            <Meta className='text-3xl' title={title} />
            <div className='flex justify-between'><p className='text-xl mt-3 text-red-500'>Price : {price}</p>
                <button><ArrowForwardIcon className='text-2xl text-red-500'/></button>
            </div>
        </Card>
            
        </div>
    );
};

export default ServiceCard;