import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';

const InfoSection = () => {
    return (
        <div className="mx-auto mt-20 mb-20 text-white h-72 bg-black grid grid-cols-3 place-items-center">
            
            <div className='flex gap-5'>
                <div className='text-5xl'>
                    <CalendarMonthIcon fontSize='10'></CalendarMonthIcon>
                </div>
                <div>
                    <h3 className='text-xl'>We are open monday-friday</h3>
                    <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex gap-5'>
            <div className='text-5xl'>
                    <ContactPhoneIcon fontSize='10'></ContactPhoneIcon>
                </div>
                <div>
                    <h3 className='text-xl'>Have a question?</h3>
                    <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex gap-5'>
            <div className='text-5xl'>
                    <HomeIcon fontSize='10'></HomeIcon>
                </div>
                <div>
                    <h3 className='text-xl'>Need a repair? our address</h3>
                    <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;