import { ReactComponent as Logo } from '../assets/logo.svg'

function Navbar (){
    return (
        <nav className="w-screen p-4 bg-secondary text-2xl font-bold text-text-primary">
            <div className="flex gap-4">
                <Logo />
                <h1>
                    Streemy
                </h1>
            </div>
        </nav>
    );
}

export default Navbar