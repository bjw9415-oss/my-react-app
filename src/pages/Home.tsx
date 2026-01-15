import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import { Content } from "../components/Content";
import {useNavigate} from "react-router"
export default function Home(){
      const navigate = useNavigate();
     return    (
         
          <div>
           <Header/>
            <Content className="flex flex-col gap-4">Home Page
               <button onClick={()=> navigate('/cart')}>장바구니로 이동</button>
               <button onClick={()=> navigate('/user-list')}>사용자 목록으로 이동</button>
            </Content>
            <Footer/>
            </div>
     );
}