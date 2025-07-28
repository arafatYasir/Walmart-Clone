import Image from "next/image";
import Link from "next/link";
import { title } from "process";

type Props = {
    title: string;
    image: string;
    className: string;
}

const GridOption = ({ title, image, className }: Props) => {
    return (
        <Link className={`grid-option relative ${className}`} href={
            {
                pathname: "/search",
                query: { q: title }
            }
        }>
            <h2>{title}</h2>

            {image && (
                <Image src={image} alt={title} layout="fill" className="object-cover opacity-20 rounded-md"/>
            )}
        </Link>
    );
};

export default GridOption;