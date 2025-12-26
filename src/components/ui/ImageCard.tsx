import Image from "next/image";

type ImageCardProps = {
    //clases adicionales para el contenedor principal
    clasesContenedor?: string;
    // clases para el contenedor de la img
    clasesImgContenedor?: string;
    // props para la imagen (estandar de next)
    imageSrc: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageClases?: string;
    // encabezado debajo de la imagen
    titulo?: string;
    clasesTitulo?: string;
    // texto descriptivo debajo del titulo
    descripcion?: string;
    clasesDescripcion?: string;
}

export default function ImageCard({
    clasesContenedor,
    clasesImgContenedor,
    imageSrc = '',
    imageAlt = '',
    imageWidth,
    imageHeight,
    imageClases,
    titulo,
    clasesTitulo,
    descripcion,
    clasesDescripcion,
}: ImageCardProps) {
    return (
        <div className={`${clasesContenedor}`}>
            <div className={`${clasesImgContenedor}`}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className={imageClases}
                />
            </div>
            <h2 className={`${clasesTitulo}`}>{titulo}</h2>
            <p className={`${clasesDescripcion}`}>{descripcion}</p>
        </div>
    );
}