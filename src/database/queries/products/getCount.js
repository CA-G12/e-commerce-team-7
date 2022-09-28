const connection = require('../../config/connection');

const getCount = ({min,max,category}) => {
    if(category === 'all'){
       return connection.query('SELECT count(id) FROM PRODUCTS where price between $1 and $2',[+min,+max]); 
    }
        return connection.query('SELECT count(id) FROM PRODUCTS  where price between $1 and $2 and category = $3',[+min,+max,category]);
    
    
}
module.exports = getCount;
