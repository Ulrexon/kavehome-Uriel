// image

'use client'

import React, { Suspense } from 'react';
import styles from './imageStyles.module.scss';
import { useSearchParams } from 'next/navigation';

const ImageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('url') ?? '';

    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} src={search} alt="Image" />
        </div>
    );
}

const Image: React.FC = () => {
    return (
        <Suspense fallback={<div>Cargando parámetros de búsqueda...</div>}>
            <ImageContent />
        </Suspense>
    );
};

export default Image;
