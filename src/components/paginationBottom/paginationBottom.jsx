import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import s from './paginationBotton.module.scss';

export const PaginationBottom = ({fetchMore, defaultLimit}) => {
    const [isHideButton, setHideButton] = useState(false);
    const [limit, setLimit] = useState(defaultLimit);
    const {query, push} = useRouter();

    if (isHideButton) return null;
    return (
        <div className={s.pagination}>
            <button
                className={s.showMore}
                onClick={() => {
                    fetchMore({
                        variables: {
                            first: limit,
                            offset: limit,
                        },
                        updateQuery: (previousResult, {fetchMoreResult}) => {
                            if (!fetchMoreResult) {
                                return previousResult;
                            }

                            if (
                                fetchMoreResult &&
                                fetchMoreResult.allCourseCategories.edges.length < defaultLimit
                            ) {
                                setHideButton(true);
                            }
                            return {
                                ...previousResult,
                                allCourseCategories: {
                                    ...previousResult.allCourseCategories,
                                    edges: [
                                        ...previousResult.allCourseCategories.edges,
                                        ...fetchMoreResult.allCourseCategories.edges,
                                    ],
                                },
                            };
                        },
                    });
                    push({
                        pathname: query.category,
                        query: {
                            limit: limit + defaultLimit,
                        },
                    });
                    setLimit(limit + defaultLimit);
                }}
            >
                Показать еще
            </button>
        </div>
    );
};
