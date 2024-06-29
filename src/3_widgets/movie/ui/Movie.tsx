import React, {useEffect, useState} from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import {Text} from "6_shared/ui/Text/Text";
import cls from './Movie.module.scss';
import {RequestManager} from "6_shared/api/apiEndpoints/movieApi";
import {dataMovie} from "6_shared/api/types/types";
import {Virtuoso} from "react-virtuoso";
import * as ReactDOM from "react-dom";
import {MovieItem} from "3_widgets/movie/ui/MovieItem";

interface MovieProps {
    className?: string;
    children?: React.ReactNode;
}

export const Movie = ({className}: MovieProps) => {

    const manager = new RequestManager();
    const [loading, setLoading] = useState<boolean>(false);
    const [movie, setSetMovie] = useState<dataMovie[]>([]);

    useEffect(() => {
        setLoading(true);
        manager.addData('budget_min', 1);
        manager.addData('budget_max', 10000);
        manager.addData('original_language', 'en');
        manager.addData('sortFiled', 'imdb_id');
        manager.addData('genres', ['Action']);

        manager.sendRequest()
            .then(res => {
                setLoading(false);
                setSetMovie(res.data.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    //@ts-ignore
    const handler = (e) => {

    }

    return (
        <div className={classNames(cls.movie, {}, [className])}>
            <div className={classNames(cls.wrapperMovie, {}, [''])}>
                <Virtuoso
                    style={{height: '90vh'}}
                    totalCount={10}
                    data={movie}
                    itemContent={(index, data) => {
                        return (
                            <MovieItem
                                key={index}
                                obj={data}
                            />
                        )
                    }}
                />
            </div>
        </div>
    );
};

