import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import { Content } from "../components/Content";
import {useNavigate} from "react-router"
export default function Home(){
      const navigate = useNavigate();
     return    (
         
          <div>
           <Header/>
            <Content>Home Page
               <button onClick={()=> navigate('/cart')}>주문</button>
            </Content>
            <Footer/>
            </div>
     );
}