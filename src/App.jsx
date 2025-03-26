import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from "./pages/Quiz";
import Nav from "./pages/Nav";
import Threapists from "./pages/Threapists";
import Mental from './pages/Mental';
import Games from './pages/Games';
import Entertainment from "./pages/Entertainment";
import Chatbots from './pages/Chatbots';
import Yoga from './pages/Yoga';
import Footer from './pages/Footer';

// Homepage Layout
const Home = () => {
    return (
        <>
            <Nav />
            <div className="h-screen flex flex-col">
                <Quiz />
            </div>

            {/* Therapist Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Get Connected with Therapists</p>
                <Threapists />
            </div>

            {/* Mental Health Section */}
            <div className='border-t-4 border-blue-900 p-4 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Mental Health and Wellbeing</p>
                <Mental />
            </div>

            {/* Games Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Games</p>
                <Games />
            </div>

            {/* Entertainment & Relaxation Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Entertainment & Relaxation</p>
                <Entertainment />
            </div>

            {/* Friendly Chatbots Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Friendly Chatbots</p>
                <Chatbots />
            </div>

            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Footer</p>
                <Footer/>
            </div>
        </>
    );
};

// Yoga Page Layout (Only Navbar and Footer)
const YogaPage = () => {
    return (
        <>
            <Nav />
            <Yoga />
            <Footer />
        </>
    );
};

// Main App Component with Routing
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/therapists" element={<Threapists />} />
                <Route path="/mental" element={<Mental />} />
                <Route path="/games" element={<Games />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/chatbots" element={<Chatbots />} />
                <Route path="/yoga" element={<YogaPage />} />
            </Routes>
        </Router>
    );
};

export default App;
