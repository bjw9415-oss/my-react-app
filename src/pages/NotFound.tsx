import { useNavigate } from "react-router";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function NotFound(){
    const navigate= useNavigate();
    return(
      <div>
        <Header/>
        <Content>
            404 Not Found Page
            <button onClick={()=> navigate('/')}>홈으로 이동</button>
        </Content>
        <Footer/>
      </div>
    );
}