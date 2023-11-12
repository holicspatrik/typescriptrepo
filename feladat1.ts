


function vanenegativ(szamok:number[]):boolean{


    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0 )){


        i++;
    }


    if(i < szamok.length){

       return true
    }


    else{

        return false


    }


}


function korkerter(r:number):[number, number]{

    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

    return[ker, ter];
}


console.log(vanenegativ([5, 12, 3, -56]))
console.log(vanenegativ([5, 12, 3, 56]))
console.log(korkerter(5));





interface Auto{

    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinese:boolean;
}