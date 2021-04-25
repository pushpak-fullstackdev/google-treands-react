export const search = (input) => fetch(`http://localhost:3000/trends?keyword=${input.text}&startDate=${input.startDate}&endDate=${input.endDate}`);


export const format = (array) => array.map(({value, formattedTime}) => [new Date(formattedTime), value])