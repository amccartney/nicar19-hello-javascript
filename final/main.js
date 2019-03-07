var bluths = [
    {
        "name": "Michael",
        "job": "CEO",
        "num_children": 1,
        "quote": "I don't know what I expected."
    },{
        "name": "GOB",
        "job": "Magician",
        "num_children": 1,
        "quote": "I've made a huge mistake."
    },{
        "name": "Lindsay",
        "job": "Activist",
        "num_children": 1,
        "quote": "It's vodka. It goes bad once it's opened."
    },{
        "name": "Buster",
        "job": "Army",
        "num_children": 0,
        "quote": "I'm a monster!"
    }
]

var plants = [
    {
        "Name": "Cyclamen",
        "Type": "flower",
        "Description": "Pink, downward-facing flowers",
    },
    {
        "Name": "Jalepeno",
        "Type": "pepper",
        "Color": "Long, green peppers",
    },
    {
        "Name": "Haworthia",
        "Type": "succulent",
        "Color": "Dark green, spiky succulent with white stripes",
    },
]


function tableMaker(id, data) {
    //  Grabs whichever table element in the index.html we specify with id
    table = document.getElementById(id)

    //  This loops through each object of whatever dataset we named with data and appends a table row
    //  to our table that we created above
    data.forEach(function(obj) { 
        var tableRow = table.insertRow(-1);
        // Then we loop through the attributes in each object and create a new table cell for the data
        for(i in obj){
            // This creates the table cell. The `-1` at the end is just a JavaScript thing that tells 
            // the `insertCell` to stick any new cells after the previous one intead of before or above.
            var tableCell = tableRow.insertCell(-1);
            // Finally, we add the data to the table cell and voila, a table of our data.
            tableCell.innerHTML = obj[i];
        }
    });
}

// Calls our tableMaker function for bluths, then for plants
tableMaker('bluth-table', bluths);
tableMaker('plant-table', plants);