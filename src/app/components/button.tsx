'use client'

import Image from "next/image";

type button_prop = {
    image: string,
    url: string
}
const Button = (prop: button_prop) => {
    const image = prop.image;
    const url = prop.url;
    return (
        <a href={url} >
            <button className=" h-9 w-9  m-2 hover:h-10 transition-all duration-150 ease-in-out">
                <Image src={image} alt="" width={36} height={36} />
            </button>
        </a>

    );
}

export default Button;