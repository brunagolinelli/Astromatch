import styled from "styled-components"

export const ListContainer = styled.div`
  padding: 8px;
`

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0,0,0,0.1)
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`