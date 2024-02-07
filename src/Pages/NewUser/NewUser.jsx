import './NewUser.css'

const NewUser = () => {
    return (
        <div>
            
            <div className='flex gap-5 m-5'>
                <div className="App">
                    <h1 className='text-2xl font-bold text-center m-5'>Automatic Findings</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Pattern Name</th>
                            <th>Count</th>
                            <th>Keyword Matched</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Akram</td>
                            <td>21</td>
                            <td>Male</td>
                            
                        </tr>
                        
                        
                        </tbody>
                    </table>
                </div>

                <div className="App">
                    <h1 className='text-2xl m-5 font-bold text-center'>Expert Findings</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Pattern Name</th>
                            <th>Count</th>
                            <th>Keyword Matched</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Akram</td>
                            <td>21</td>
                            <td>Male</td>
                            
                        </tr>
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewUser;