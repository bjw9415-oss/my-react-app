import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import { Content } from "../../components/Content";
import { ConcertNav } from "../../components/ConcertNav";

export default function ConcertsHome(){
     return (
          <div>
           <Header/>
           <ConcertNav/>
           <Content>ConcertsHome Page</Content>
           <Footer/>
          </div>
     );
}