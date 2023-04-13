import styled from "styled-components";
import React from 'react';

const CheckPointTitleDiv = styled.div`
  width: 100%;
`

const CheckPointDivTitle = styled.h1`
`

const CheckPointDivSubtitle = styled.h2`
  color: rgb(164, 104, 67);
`

export default function CheckPointTitle ({title, subtitle}) {
  return (
    <CheckPointTitleDiv>
        <CheckPointDivTitle>{title}</CheckPointDivTitle>
        <CheckPointDivSubtitle>{subtitle}</CheckPointDivSubtitle>
    </CheckPointTitleDiv>
  );
}