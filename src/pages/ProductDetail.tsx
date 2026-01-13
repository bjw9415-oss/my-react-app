import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import { Content } from "../components/Content";
import { useSearchParams } from "react-router";

export function ProductDetail(){
     const [searchPharms]= useSearchParams();
     const id = searchPharms.get('id');
     return (
         
        <div>
          <Header/>
            <Content>
               ProductDetail Page
               <p>Product ID: {id}</p>
            </Content> 
          <Footer/>
         </div>
     );
}