const mockData = [
    {
        name: "Laundry",
        day: "Tuesday",
        time: "7:00"
    }
];

const getAll = () => {
    return mockData;
}

const addListing = (name, day, time) =>{
    const listing = {
        name,
        day,
        time
    };
    return listing;
};

export default{
    getAll,
    addListing
}