import {useState} from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    try {
        console.log(styles.count)
    } catch (e) {
        console.log(styles, 'Ошибка', e)
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