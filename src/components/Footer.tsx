import Container from "./Container"
import Image from "next/image"
import Logo from "../assets/logoWhite.png"
import Link from "next/link"
import { navigation, services } from "@/constants/data"
import { Facebook,Instagram} from "lucide-react"
const Footer=()=>{
    return(
        <div className="bg-zinc-700 text-zinc-200">
            <Container className="bg-zinc-600 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10  xl:place-items-center">
            <div>
            <Link href={"/"}>
                <Image src= {Logo} alt="Logo Image"
                 className="w-24"/>
                
                </Link>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate?
                </p>
            </div>
                
                <ul className="hidden md:flex flex-col items-start text-sm uppercase gap-3 font-semibold grid-cols-4">
                {navigation.map((item)=>(
                    <Link key={item.title} href={item.herf}>
                    <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">
                     {item.title}
                    <span className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"/>
                    </li>
                    </Link>
                    ))}
           
           
            </ul>
            <ul className="flex  flex-col items-start text-sm uppercase gap-3 font-semibold">
                {services.map((item)=>(
                
                    <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">
                     {item.title}
                    <span className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"/>
                    </li>
                    
                    ))}
           
           
            </ul>
            
            
                
                <div>
                    <p>Reach me with</p>
                    <ul>
                        <a href="https//:www facebook.com" target="-blank">
                        <li className="w-8 h-8 bg-zinc-300 text-zinc-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer duration-300">
                        <Facebook/>
                      
                        </li>
                        </a>
                    </ul>
            
                </div>
                <div>
                    <ul>
                        <a href="https//youtube.com" target="-blank">
                        <li className="w-8 h-8 bg-zinc-300 text-zinc-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer duration-300">
                        <Instagram/>
                       </li>
                        </a>
                    </ul>
                 
                
                 
                </div>
            
            </Container>
            
            </div>
    )
}
export default Footer