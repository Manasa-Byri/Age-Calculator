let update;
document.querySelector("#done").addEventListener("click",function(){
    update=function() {
        let bdt=document.querySelector("#bdt").value,
            bday=new Date(bdt),
            bday_val=bday.getTime(),
            today=new Date(),
            now=today.getTime(),
            value=now-bday_val,
            var_sec=Math.floor(value/1000),
            var_min=Math.floor(value/(1000*60)),
            var_hour=Math.floor(value/(1000*60*60)),
            var_day=Math.floor(value/(1000*60*60*24)),
            var_week=Math.floor(value/(1000*60*60*24*7)),
            var_month=Math.floor(value/(1000*60*60*24*30.4375)),
            var_year=Math.floor(value/(1000*60*60*24*365.25));
    
        let insert=function(x,y){
            document.querySelector(x).innerHTML=y;
        }
        insert("#year",var_year+" Years");
        insert("#month",var_month+ " Months");
        insert("#week",var_week+" Weeks");
        insert("#day",var_week+" Days");
        insert("#hour",var_week+" Hours");
        insert("#minute",var_week+" Minutes");
        insert("#second",var_week+" Seconds");
};
    setInterval(update,1000);
})
document.querySelector("#resetBtn").addEventListener("click", function () {
    location.reload();
});