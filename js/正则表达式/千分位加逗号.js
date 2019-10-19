        var num=12345678;
        
        var reg=/(\d)(?=(\d{3})+$)/g;                   
        
        console.log((num+'').replace(reg,'$1,'));   
        
        //12,345,678
        
        
        
// 前瞻：
exp1(?=exp2) 查找exp2前面的exp1
// 后顾：
(?<=exp2)exp1 查找exp2后面的exp1
// 负前瞻：
exp1(?!exp2) 查找后面不是exp2的exp1
// 负后顾：
(?<!exp2)exp1 查找前面不是exp2的exp1
