import React, { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { ImEnlarge2 } from "react-icons/im";
import ImagesApp from '../../assets/ImagesApp';
import "./Communications.css";

export default function Communications() {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const downloadImage = (src, name) => {
        const link = document.createElement('a');
        link.href = src;
        link.download = name;
        link.click();
    };

    const enlargeImage = (imageSrc) => {
        setEnlargedImage(imageSrc);
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    return (
        <div className='comunicados'>
            <h1>Noticias CEIS</h1>
            <div className='comunicados-grid'>
                {[1, 2, 3, 4].map((i) => (
                    <div className='comunicado-card' key={i}>
                        <img src={ImagesApp[`Comunicados${i}`]} alt={`Comunicado ${i}`} />

                        <div className='description'>
                            <div>
                                <h2>Comunicado {i}</h2>
                                <small>'13 de septiembre 2024'</small>
                            </div>
                            <div className='actions'>
                                <button onClick={() => enlargeImage(ImagesApp[`Comunicados${i}`])}>
                                    <ImEnlarge2 />
                                </button>
                                <button onClick={() => downloadImage(ImagesApp[`Comunicados${i}`], `Comunicado_${i}`)}>
                                    <AiOutlineDownload />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {enlargedImage && (
                <div className='enlarged-overlay' onClick={closeEnlargedImage}>
                    <img src={enlargedImage} alt="Enlarged" className='enlarged-image' />
                </div>
            )}
        </div>
    );
}
