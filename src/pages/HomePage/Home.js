import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection, Rover } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Rover />
        </>
    )
}

export default Home
