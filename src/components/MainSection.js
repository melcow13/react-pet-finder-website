import React,  { useEffect, useState } from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css';
import { fetchAnimals } from '../actions';
import AnimalList from './AnimalList';


const MainSection = () => {

    const [animals, setAnimals] = useState([])
    useEffect(() => {
        makeApiCall()
    }, [])

    const makeApiCall = async () => {
        const animalsData = await fetchAnimals()
        setAnimals(animalsData.animals)
    }


    const renderAnimalsOrLoading = () => {
        console.log(animals)

        if (!animals.length) return <div>Loading...</div>
        return (
            <AnimalList animals={animals}/>
        )
    }
    console.log(process.env)
    return (
        <div className='main-container'>
            <img src='mainimg1.jpg' alt='pictureofcatsanddogs'/>
            <h1>FIND YOUR PETS</h1>
            <p>What are you waiting for?</p>
            <div className='main-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    SIGN UP
                </Button>
            </div>
           {renderAnimalsOrLoading()}
        </div>
    )
};

export default MainSection