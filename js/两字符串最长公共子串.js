var str1='abc396xyz';
       var str2='ac396zyxb'
       
        function get(str1,str2){
            var arr=new Array();
            for(var i=0;i<str1.length;i++){
                arr[i]=new Array();
            }

            var length=0; //保存字符串长度
            var index=0;  //保存索引

            for(var i=0;i<str1.length;i++){
                for(var j=0;j<str2.length;j++){
                    if(str1[i]==str2[j]){
                        if(i>0&&j>0){
                            arr[i][j]=arr[i-1][j-1]+1;
                        }
                        else{
                            arr[i][j]=1;
                        }
                        if(arr[i][j]>=length){
                            length=arr[i][j];
                            index=i;
                        }
                    }
                    else{
                        arr[i][j]=0
                    }
                }
            }
            var result=str1.slice(index-length+1,length+(index-length+1));
            return `最长相同字串: ${result}  长度: ${length}`;
        }

        console.log(get(str1,str2));    //最长相同字串: c396  长度: 4
