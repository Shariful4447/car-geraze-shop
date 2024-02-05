import { Card } from 'antd';
const { Meta } = Card;

const ServiceCard = () => {
    return (
        <div>
            <Card
            className='w-[240px] m-5'
            hoverable
            
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" />
            <p>Price</p>
            <button className='btn btn-primary m-2 ml-32'>Next</button>
        </Card>
            
        </div>
    );
};

export default ServiceCard;