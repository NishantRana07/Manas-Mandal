import Quiz from "./pages/Quiz";
import Nav from "./pages/Nav";
import Threapists from "./pages/Threapists";
import Mental from './pages/Mental';
import Games from './pages/Games';
import Entertainment from "./pages/Entertainment";
import Chatbots from './pages/Chatbots'
const App = ()=>
{
    return (
        <>
        <div className="h-screen flex flex-col">
        <Nav/>
        <Quiz/>
        </div>

        {/* Therapist Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Get Connected with Therapists</p>
            <Threapists/>
        </div>

        {/*Mental health and well being Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Mental Health and Wellbeing</p>
            <Mental/>
        </div>

        {/*Games Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Games</p>
            <Games/>
        </div>


        {/*Entertainment & Relexation Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Entertainment & Relaxation</p>
            <Entertainment/>
        </div>
        
        {/*Entertainment & Relexation Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Entertainment & Relaxation</p>
            <Entertainment/>
        </div>
        
        {/*Friendly Chatbots Section in Homepage */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Entertainment & Relaxation</p>
            <Chatbots/>
        </div>

        {/* Footer */}
        <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
            '>Footer</p>
        </div>

        </>
    )
}

export default App;