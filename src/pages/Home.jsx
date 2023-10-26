import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function Home(){
    return(
        <div className="min-h-screen w-screen overflow-x-hidden bg-gray-500 text-text-primary">
            <Navbar />
            <h1 className="px-8 py-6 text-4xl font-bold bg-red-500 rounded-md">
                Anime List
            </h1>
            <Dashboard />
        </div>
    )
}

export default Home;