export const search = () => fetch(`http://localhost:3000/trends?keyword=Movies&startDate=2020-01-01&endDate=2020-01-31`);


export const format = (array) => array.map(({value}, index) => {
    return [index, value]
})