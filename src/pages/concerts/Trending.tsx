import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import { Content } from "../../components/Content";
import { ConcertNav } from "../../components/ConcertNav";

export function Trending(){
     return (
          <div>
           <Header/>
           <ConcertNav/>
           <Content>Trending Page</Content>
           <Footer/>
          </div>
     );
}