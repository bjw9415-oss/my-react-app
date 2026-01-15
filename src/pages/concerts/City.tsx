import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Content } from "@/components/Content";
import { ConcertNav } from "@/components/ConcertNav";
import { useParams } from "react-router";

export default function  City(){
     const Parms= useParams();
     return (
          <div>
           <Header/>
           <ConcertNav/>
           <Content>City Page 공연 도시: {Parms.city}</Content>
           <Footer/>
          </div>
     );
}