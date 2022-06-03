import styled from 'styled-components';
import { animation } from '../../../styles';
const { fade_in } = animation;

export const Main = styled.section`
  animation-duration: 2s;
  animation-name: ${fade_in};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled.span`
  margin: 20px 0;
  font-size: 3.5vw;
  font-weight: 700;
`;

export const WriteForm = styled.form`
  margin: 20px 0;
`;

export const ListInput = styled.input`
  text-align: center;
  padding: 10px 30px;
  width: 40vw;
  border: none;
  font-size: 1.2vw;

  &::placeholder {
    font-size: 1.5vw;
  }

  &:focus {
    outline: none;
    place-content: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const ListDiv = styled.div`
  padding: 20px;
  width: 30vw;
  height: 60vh;
  border: 1px solid lightgray;
  border-radius: 20px;
  overflow: scroll;
`;

export const LogOut = styled.button`
  margin-top: 20px;
  border: none;
  background-color: white;
  color: red;
  font-weight: 700;
  cursor: pointer;
`;
