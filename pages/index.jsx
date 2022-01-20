import Image from 'next/image'
import nextImgSrc from '../public/siemens.jpg'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
               <title>Home page</title> 
            </Head>
            <p>
                Для теста в dev tools установить скорость соединения 3G и 
                <strong> обязательно </strong> выставить флаг отключения кэша.
                В этом случае будет видно заблюренную картинку перед загрузкой большой картинки. 
            </p>
              
            <Image src={nextImgSrc} alt="siemens img" width='1024' height='683' placeholder='blur'/>
        </div>
    )
}
