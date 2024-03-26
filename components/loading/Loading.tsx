'use client';
import React, { useEffect } from 'react'
import styles from '../../styles/loading.module.css'

interface LoadingComponentProps {
  isChild?: boolean;
}

export default function LoadingComponent({ isChild }: LoadingComponentProps) {
  // isChild es para que el loader se cargue dentro del componente, usa el 100% en vez del 100vw y 100vh
  const bodyDimmed = isChild ? styles["bodyDimmed-child"] : styles["bodyDimmed-full"]
  
  useEffect(() => {
    // Agregar la clase al montar
    document.body.classList.add(bodyDimmed);

    // Remover la clase al desmontar
    return () => {
      document.body.classList.remove(bodyDimmed);
    };
  }, []);

  return (
    <div className={styles.loadingOverlay}>
      <div className={ styles.container}>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
        <div className={styles.slice}></div>
      </div>
    </div>
  )
}
