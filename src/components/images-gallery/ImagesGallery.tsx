import './ImagesGallery.css';
import { ProductImage } from "../../models/Product"
import { useEffect, useRef, useState } from 'react';

interface GalleryElementData {
    index: number;
    images: ProductImage;
}

export const ImagesGallery: React.FC<{images: ProductImage[]}> = ({images}) => {
    const [data, setData] = useState<GalleryElementData[]>();
    const [currentIndex, setCurrentIndex] = useState<number>();
    const currentImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setData(images.map((images, index) => {return {images, index}}));
        setCurrentIndex(0);
    }, [images]);

    useEffect(() => {
        const img = data?.find(it => it.index === currentIndex);
        if (img) {
            currentImageRef.current!.src = img.images.main;
        }
    }, [currentIndex]);

    const productThumbClick = (index: number): void => {
        setCurrentIndex(index);
    };

    return (
        <div className="images-galler-container">
            <div className="current-image-block">
                <img alt="Product image" ref={currentImageRef}/>
            </div>
            <div className="gallery-block flex_center_align flex_gap_10">
                {
                    data && data
                    .map(it => {
                        if (it.index == currentIndex) return;
                        return (
                            <img alt="Product img thumb" key={it.index} src={it.images.thumb} onClick={productThumbClick.bind(this, it.index)}/>
                        );
                    })
                }
            </div>
        </div>
    );
}