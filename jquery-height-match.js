//find number of column in row
var section_length = jQuery('.section .column').length; 

//Assign variable to push all height of columns 
var column_height_array = [];

//Loop for push height of each column
for(var i=0;i< section_length;i++){
    column_height_array.push(jQuery('.section .column:eq('+i+')').outerHeight()); 
}

//Get maximum height of the column
var column_max_height = Math.max.apply(Math,column_height_array);   

//Add maximum height css in each column 
jQuery('ul.e-table-list').css('height',column_max_height+'px');
