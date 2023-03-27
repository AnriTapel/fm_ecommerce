import './ImagesGallery.css';
import { ProductImage } from "../../models/Product"
import { useEffect, useRef, useState } from 'react';

export const ImagesGallery: React.FC<{images: ProductImage[]}> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const currentImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const img = images[currentIndex];
        if (img) {
            currentImageRef.current!.src = img.main;
        }
    }, [currentIndex]);

    const productThumbClick = (index: number): void => {
        setCurrentIndex(index);
    };

    return (
        <div className="images-galler-container">
            <div className="current-image-block">
                <img alt="Product image" className="product-main-image" ref={currentImageRef}/>
            </div>
            <div className="gallery-block flex_center_align flex_gap_20">
                {
                    images && images.map((it, index) => {
                        return (
                            <img alt="Product img thumb" className={currentIndex == index ? 'active-image' : ''}  
                                key={index} src={it.thumb} onClick={productThumbClick.bind(this, index)}/>
                        );
                    })
                }
            </div>
        </div>
    );
}