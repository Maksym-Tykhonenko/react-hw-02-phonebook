import styled from "styled-components";

export const List = styled.ul`
   list-style-type: none;
  padding: 0;
  margin: 0;
`;


export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  `;
export const Name = styled.p`
   margin: 0;
  font-size: 16px;
  `;
  export const Btn = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  `;