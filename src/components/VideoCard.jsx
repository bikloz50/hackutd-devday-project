
function VideoCard(props){

    return(
        <a href={'/video' + '/' + props.id}>
        <div className="relative m-8 h-[299px] w-[180px] bg-secondary rounded-md">
            <img className="rounded-md overflow-hidden h-full w-full" src={props.thumbnailURL} alt={props.title}></img>
            <div className="absolute w-full h-2/5 bottom-0 rounded-md bg-gradient-to-t from-black to-transparent">
            </div>
            <h1 className="absolute bottom-4 left-4 text-xl font-semibold font-mono">
                {props.title}
            </h1>
            
        </div>
        </a>
    );
}

export default VideoCard;