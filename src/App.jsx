import Quiz from "./pages/Quiz";
import Nav from "./pages/Nav";
import Threapists from "./pages/Threapists";
const App = ()=>
{
    return (
        <>
        <div className="h-screen flex flex-col">
        <Nav/>
        <Quiz/>
        </div>
        <div className='border-t-4 border-blue-900 p-4 text-center w-full  overflow-x-hidden'>
            <p className='text-xl font-semibold font-["Roboto_Condensed"]
    '>Get Connected with Therapists</p>
        <Threapists/>
        </div>

        </>
    )
}

export default App;