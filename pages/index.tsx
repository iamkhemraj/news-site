import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <h1 className="heading">HI THIS IS A HOME PAGE!</h1>
    </div>
  );
}
