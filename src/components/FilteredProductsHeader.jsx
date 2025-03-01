import React from 'react';
import UnopDropdown from 'unop-react-dropdown';

import sort from '../assets/images/sort.png';

const FilteredProductsHeader = ({ title }) => {
    const handler = () => {};
    return (
        <div className="filtered-products-header d-flex justify-content-between pt-3">
            <div className="text">{title}</div>
            <div className="text d-flex">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <button className="mx-1 btn p-0 border-0 bg-transparent">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt="sort"
                            />
                            ترتيب حسب
                        </button>
                    }
                    delay={0}
                    align="center"
                    hover
                >
                    <div className="filter">
                        <div className="border-bottom item">بدون ترتيب</div>
                        <div className="border-bottom item">الاكثر مبيعا</div>
                        <div className="border-bottom item">الاعلي تقييما</div>
                        <div className="border-bottom item">
                            السعر من الاقل للاعلي
                        </div>
                        <div className="item">السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    );
};

export default FilteredProductsHeader;
