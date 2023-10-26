import { useParams } from 'react-router-dom';
import { fetchVideoById } from '../api';
import Navbar from '../components/Navbar';
import {useState, useEffect} from 'react'

function Video(){
    const params = useParams();
    const [video, setVideo] = useState();
    
    async function fetchData (){
        const data = await fetchVideoById(params.id);
        setVideo(data);
    }

    useEffect(() => {fetchData(); } ,[]);

    if(!video){
        return <h1>Loading...</h1>
    }
return(
        <div className="min-h-screen w-screen overflow-x-hidden bg-gray-500 text-text-primary">
            <Navbar />
            <div className="m-36">
                <video controls>
                    <source src={video.videoUrl} />
                </video>
                <h1 className="text-center text-3xl font-bold text-text-primary">
                    {video.title}
                </h1>
            </div>
        </div>
)
}
export default Video;