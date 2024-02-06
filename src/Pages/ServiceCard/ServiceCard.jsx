import { Card } from 'antd';
const { Meta } = Card;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = () => {
    return (
        <div>
            <Card
            className='w-[350px] m-5'
            hoverable
            
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" />
            <div className='flex justify-between'><p className='text-xl mt-3'>Price</p>
                <button><ArrowForwardIcon className='text-2xl text-red-500'/></button>
            </div>
        </Card>
            
        </div>
    );
};

export default ServiceCard;