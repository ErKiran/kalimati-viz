### To run this project 

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

To clone the Data Repo 
Run `sh setup.sh`

#### Requirements 
Expose two endpoints that will return html charts 

* /viz/prices 

1. Find out the current date. 
2. Extract year and month from the current date 
3. Navigate to the data folders in kalimati directory and find the folders with the same year and month extracted in step 2.
4. Walk through the files in that folder and combines every file into one file. 
5. The combined file should be in the format of 
```
[
    {
        "date": "2020-01-01",
        "name": "Tomato",
        "unit": "Kg",
        "price": 100
    },
    {
        "date": "2020-01-02",
        "name": "Tomato",
        "unit": "Kg",
        "price": 120
    }
]
```

6. Take sample.html as references and create a html file that will display the data in a chart.
7. The chart should be a line chart with date on the x-axis and price on the y-axis.
8. Limit the charts to show only 5-10 vegetables.