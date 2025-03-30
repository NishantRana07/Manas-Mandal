import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Hero from './pages/hero'
import Quiz from "./pages/Quiz";
import Nav from "./pages/Nav";
import Threapists from "./pages/Threapists";
import Mental from './pages/Mental';
import Games from './pages/Games';
import Entertainment from "./pages/Entertainment";
import Chatbots from './pages/Chatbots';
import Yoga from './pages/Yoga';
import Footer from './pages/Footer';
import Asna from './pages/Asna';
import dass from './pages/Dass';
import Med from './pages/Meditation';
import Exc from './pages/Excercise'
import YoutubeBot from './pages/Additional/YoutubeBot';
import NutritionBot from './pages/Additional/NutritionBot';
import SongBot from './pages/Additional/SongBot';
import WorkoutBot from './pages/Additional/WorkoutBot'
import MovieBot from './pages/Additional/MovieBot';

// Homepage Layout
const Home = () => {

    const [asnaCh,setAsnaCh] = useState(0);
    return (
        <>
            <Nav />
            <Hero/>

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

            {/*
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Games</p>
                <Games />
            </div> */}

            {/* Entertainment & Relaxation Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Entertainment & Relaxation</p>
                <Entertainment />
            </div>

            {/* Friendly Chatbots Section */}
            <div className='border-t-4 border-blue-900 p-4 pl-8 pr-8 text-center w-full  overflow-x-hidden'>
                <p className='text-xl font-semibold font-["Roboto_Condensed"]'>Chatbots</p>
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

const Dass = () =>
{
    return(
        <>
        <Nav/>
        <dass/>
        <Footer/>
        </>
    )
}

const Quizz = () =>
{
    return (
        <>
            <Nav />
            <Quiz />
            <Footer />
        </>
    );
}

const Asnas = ()=>
{
    return(
        <>
            <Nav />
            <Asna />
            <Footer />
        </>
    );
}

const Meditation = ()=>{
    return(
        <>
            <Nav />
            <Med />
            <Footer />
        </>
    );
}

const Excercise = () =>
{
    return (
        <>
        <Nav/>
        <Exc/>
        <Footer/>
        </>
    )
}

const YBot=()=>
{
    return(
        <>
            <Nav />
            <YoutubeBot/>
            <Footer />
        </>
    );
}

const MBot=()=>
    {
        return(
            <>
                <Nav />
                <MovieBot/>
                <Footer />
            </>
        );
    }

const SBot=()=>
{
    return(
        <>
            <Nav />
            <SongBot/>
            <Footer />
        </>
    );
}

const NBot=()=>
    {
        return(
            <>
                <Nav />
                <NutritionBot/>
                <Footer />
            </>
        );
    }

    const WBot=()=>
        {
            return(
                <>
                    <Nav />
                    <WorkoutBot/>
                    <Footer />
                </>
            );
        }
// Main App Component with Routing
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quizz />} />
                <Route path="/therapists" element={<Threapists />} />
                <Route path="/mental" element={<Mental />} />
                <Route path="/games" element={<Games />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/chatbots" element={<Chatbots />} />
                <Route path="/yoga" element={<YogaPage />} />
                <Route path="/yoga/:id" element={<Asnas/>} />
                <Route path="/meditation" element={<Meditation/>} />
                <Route path="/excercise" element={<Excercise/>} />
                <Route path="/YoutubeBot" element={<YBot/>} />
                <Route path="/SongBot" element={<SBot/>} />
                <Route path="/WorkoutBot" element={<WBot/>} />
                <Route path="/NutritionBot" element={<NBot/>} />
                <Route path="/MovieBot" element={<MBot/>} />
                <Route path="dass" element={<Dass/>} />
            </Routes>
        </Router>
    );
};

export default App;
