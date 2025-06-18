import styled from "styled-components";
import BackgroundLogin from '../../assets/pexels-valeria-boltneva-1639562 1.svg'
import Background from '../../assets/Group 195.svg'





export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;


`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    max-width: 50%;



    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
  
`;
export const RightContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #1e1e1e;
p{
    color: #1e1e1e;
    font: 18px;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    a{
    text-decoration: underline;
    font-family: "Poppins", sans-serif;
    }
}


background: url('${Background}');

height: 100%;
width: 100%;
max-width: 50%;

`;
export const Title = styled.h2` 
font-family: "Poppins", sans-serif;
font-size: 40px;
font-weight: 600;



`;
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
padding: 15px;
width: 100%;
height: 100%;
max-width: 400px;



`;
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;
input{
    width: 100%;
    //border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;

}
label{
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 600;
    //color: ;


}
p{
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    height: 10px;
    font-weight: 600;
    
}

`;

export const Link = styled.a`
`;
