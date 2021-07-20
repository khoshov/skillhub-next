import {FiltersAndCourses} from 'components/filtersAndCourses/filtersAndCourses';
import {Header} from 'components/header/header';

export default function Category() {
    return (
        <>
            <Header />
            <FiltersAndCourses />
        </>
    );
}

Category.getInitialProps = async ({query}) => {
    const params = {};
    Object.keys(query).forEach(el => {
        params[el] = query[el].replace(/_/gi, ' ');
    })
    return params;
};
