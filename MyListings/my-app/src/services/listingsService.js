const mockData = [
    {
        name: "Dan",
        age: 31
    },
    {
        name: "Zach",
        age: 29
    },
    {
        name: "Drew",
        age: 27
    }
];

const getAll = () => {
    return mockData;
}

const addListing = (name, age) =>{
    const listing = {
        name,
        age
    };
    return listing;
};

export default{
    getAll,
    addListing
}