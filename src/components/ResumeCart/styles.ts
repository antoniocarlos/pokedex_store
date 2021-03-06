import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  border-top: 3px solid #751919;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  background: #d93434;
  height: 100px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div``;

export const Submit = styled.button`
  display: flex;
  margin-right: 30px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  background: #ff9000;

  border-radius: 10px;
  border: 0;

  color: #fffae8;

  font-weight: 500;

  width: 150px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  svg {
    margin-right: 16px;
    color: #fffae8;
  }

  p {
    font-size: 16px;
    color: #fffae8;
  }
`;
