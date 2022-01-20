import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HazardSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const HazardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HazardHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const HazardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const HazardCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 100%;
  height: auto;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.006);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    
    &:hover {
      transform: none;
    }
  }
`;

export const HazardCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const HazardCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const HazardCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #a9b3c1;
`;

export const HazardCardFeature = styled.li`
  margin-top: 15px;
`;

export const Img = styled.img`
  width:100%;
`