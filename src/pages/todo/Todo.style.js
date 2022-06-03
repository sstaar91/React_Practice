import styled from 'styled-components';
import { mixin } from '../../styles';

const { flexCenter } = mixin;

export const TodoBody = styled.article`
  ${flexCenter};
  height: 100vh;
`;

export const TodoArticle = styled.section`
  ${flexCenter};
  flex-direction: column;
`;
