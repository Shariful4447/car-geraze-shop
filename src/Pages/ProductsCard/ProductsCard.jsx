import { Card } from 'antd';
const { Meta } = Card;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductsCard = ({product}) => {
    const {img, title, price} = product;
    return (
        <div>
            <Card
            className='w-[380px] m-5'
            hoverable
            
            cover={<img className='border-2 p-3 rounded-xl border-white' alt="example" src={img} />}
        >
            <div className='text-center'>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" />
                </div>
                <Meta className='text-4xl mt-2' title={title} />
                <p className='text-xl  text-red-500'>Price : {price}</p>
                <p></p>
            </div>
                
            
        </Card>
            
        </div>
    );
};

export default ProductsCard;