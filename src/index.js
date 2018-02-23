// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const   array = [50,25,10,5,1];
            names = ["H","Q","D","N","P"];
    let result = {};

    function getChange(money1){
        let money2 = money1;
        array.forEach(function(element,index){
            if (money2 >= element){
                result[names[index]] = (Math.floor(money2/element));
                money2 = money2%element;
            }
        });
    }
    if(currency <= 0){
        return {};
    }else if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }else{
        getChange(currency);
        return result;
    }
}
