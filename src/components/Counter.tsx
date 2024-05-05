import {useState} from 'react';
import classNames from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    try {
        console.log(classNames.count)

    } catch (e) {
        console.log(classNames, 'Ошибка')
    }

    return (
        <div className='app'>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default Counter;