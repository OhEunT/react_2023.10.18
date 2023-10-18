import React from 'react'
import { useSelector } from 'react-redux'

function Vids() {
    const { youtube } = useSelector((store) => store.youtubeReducer);
    console.log(youtube);
    return (
        <section id="vids" className="myScroll">
            <h1>Youtube</h1>

            {youtube.map((el, index) => {
                return (
                    <img key={index} src={el.snippet.thumbnails.standard.url} alt={el.snippet.title} />
                )
            })}
        </section>
    )
}

export default Vids