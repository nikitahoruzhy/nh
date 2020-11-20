import './App.css';
import {
    ACCESEBILITY,
    ANIMATIONS, applications,
    COMPATIBILITY,
    LEARNING_CURVE,
    options,
    SIMPLICITY,
    SPEED,
    TEAMWORK,
    TESTABILITY
} from "./constants";
import {useEffect, useState} from "react";
import {Option} from "./options";
import {Application} from "./programs";


function App() {
    const [selected, setSelected] = useState([])
    const [showResult, setShowResult] = useState([])

    const pushToState = (e) => {
        const option = e.currentTarget.value;
        const isInArray = selected.includes(option);
        if (isInArray) {
            return setSelected([...selected.filter(item => item !== option)])
        }
        setSelected([...selected, option])
    }

    useEffect(() => {
    }, [showResult])

    const getCharRates = (app) => {
        let acc = selected.reduce((acc, currOption) => {
            let currRate;
            app.characteristics.map((currItem) => {
                if (currItem.name === currOption) currRate = currItem.rate
            })
            return acc + currRate
        }, 0)
        return acc
    }

    const handleSubmit = (e) => {
        let withSummedRates = []
        e.preventDefault()

        applications.map(app => {
            withSummedRates.push({app, rateSum: getCharRates(app)})
        })
        console.log(withSummedRates)
        withSummedRates.sort((a, b) => b.rateSum - a.rateSum)
        console.log(withSummedRates)
        setShowResult(withSummedRates)
    }

    return (
        showResult.length === 0 ?
            <div className="App">
                <div>Выберите приоритеты проекта:</div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {
                        options.map((item, i) => <Option key={i} name={item.name} nameRu={item.nameRu}
                                                         changeHandler={pushToState}/>)
                    }

                    <input type="submit" role="button" value="Сравнить"/>
                </form>
                {JSON.stringify(selected)}
            </div>
            :
            <div className='result'>
                <div className='result-inner'>
                    {
                        showResult.map((item, i) => {
                                if (i === 0) {
                                    return (
                                        <>
                                        <h2>Наиболее подходящие:</h2>
                                        <Application key={i} name={item.app.name}
                                                     characteristics={[...item.app.characteristics]}/></>)
                                } else if (i === 2) {
                                    return (
                                        <>
                                        <h2>Не рекомендованно:</h2>
                                        <Application key={i} name={item.app.name}
                                                     characteristics={[...item.app.characteristics]}/></>)
                                } else {
                                    return <Application key={i} name={item.app.name}
                                                        characteristics={[...item.app.characteristics]}/>
                                }
                            }
                        )
                    }
                </div>
            </div>
    );
}

export default App;
/*Speed, compatibility, animations, learnCurve, simplicity, teamwork, accessibility, testability*/
