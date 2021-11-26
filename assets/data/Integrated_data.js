import React from 'react';
import Restaurant_data from './Restaurant_data';
import Hotel_data from './Hotel_data';
import Shopping_data from './Shopping_data';
import Airline_data from './Airline_data';
import Stock_data from './Stock_data';

var num_of_items = 5;
const getIntegrated_data = () => {
    var data = [];
    var i=0;
    while (i < num_of_items && i < Restaurant_data.length) {
        data.push(Restaurant_data[i]);
        i++;
    }
    i=0;
    while (i < num_of_items && i < Hotel_data.length) {
        data.push(Hotel_data[i]);
        i++;
    }
    i=0;
    while (i < num_of_items && i < Shopping_data.length) {
        data.push(Shopping_data[i]);
        i++;
    }
    i=0;
    while (i < num_of_items && i < Airline_data.length) {
        data.push(Airline_data[i]);
        i++;
    }
    i=0;
    while (i < num_of_items && i < Stock_data.length) {
        data.push(Stock_data[i]);
        i++;
    }
    
    return data;
}

// Should show top {num_of_items} columns of each data type in home page
// {num_of_columns} would be chosen by user in settings
// If columns of data < {num_of_items}, then show all columns of data
// {num_of_columns} range: 1 - 5


export default getIntegrated_data;
