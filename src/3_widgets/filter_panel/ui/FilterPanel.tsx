import React from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import {Text} from "6_shared/ui/Text/Text";
import cls from './FilterPanel.module.scss';
import {Button} from "6_shared/ui/Button/Button";
import {Input} from "6_shared/ui/Input/Input";
import {BlockInputsFilter} from "6_shared/ui/BlockInputsFilter/BlockInputsFilter";
import {SearchPanel} from "3_widgets/search_panel";
import {BlockRadioFilter} from "6_shared/ui/BlockRadioFilter/BlockRadioFilter";

interface FilterPanelProps {
    className?: string;
    children?: React.ReactNode;
}

export const FilterPanel = ({className}: FilterPanelProps) => {
    return (
        <div className={classNames(cls.searchPanel, {}, [className])}>
            <div className={cls.wrapperSearch}>
                <SearchPanel/>
                <h2>Filters</h2>
                <BlockRadioFilter
                    titleFilter={'page size'}
                    arrValues={['10', '20', '30', '40', 'all']}

                />
                <BlockRadioFilter
                    titleFilter={'page size'}
                    arrValues={['10', '20', '30', '40', 'all']}

                />
                <div className={cls.asideFilter}>
                    <Text>
                        sort field
                    </Text>
                    <div className={cls.asideButtons}>
                        <Button>imdb id</Button>
                        <Button>budget</Button>
                        <Button>original language</Button>
                        <Button>popularity</Button>
                        <Button>release date</Button>
                        <Button>revenue</Button>
                        <Button>runtime</Button>
                        <Button>status</Button>
                        <Button>vote average</Button>
                        <Button>vote count</Button>
                    </div>
                </div>
                <BlockRadioFilter
                    titleFilter={'sort order'}
                    arrValues={['asc', 'desc']}

                />
                <div className={cls.asideFilter}>
                    <Text>
                        adult
                    </Text>
                    <div className={cls.asideButtons}>
                        <Button>yes</Button>
                        <Button>no</Button>
                    </div>
                </div>
                <BlockInputsFilter titleFilter={'budget'}/>
                <div className={cls.asideFilter}>
                    <Text>
                        genres
                    </Text>
                    <div className={cls.asideButtons}>
                        <Button>
                            genres
                        </Button>
                    </div>
                </div>
                <div className={cls.asideFilter}>
                    <Text>
                        original language
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>

                <BlockInputsFilter titleFilter={'popularity'}/>
                <BlockInputsFilter titleFilter={'release'}/>
                <BlockInputsFilter titleFilter={'revenue'}/>
                <BlockInputsFilter titleFilter={'runtime'}/>
                <div className={cls.asideFilter}>
                    <Text>
                        spoken languages
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>
                <div className={cls.asideFilter}>
                    <Text>
                        status
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'status'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>
                <BlockInputsFilter titleFilter={'vote average'}/>
                <BlockInputsFilter titleFilter={'vote count'}/>
            </div>
        </div>
    );
};

