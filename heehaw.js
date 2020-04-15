for(var num = 1; num <= 100; num++){
    if((num % 3 == 0) && (num % 5 == 0)) {
        document.write("Hee Haw!");
        document.write("<br>");
    }
    else if(num % 3 == 0){
        document.write("Hee!");
        document.write("<br>");
    }
    else if (num % 5 == 0 ){
        document.write("Haw!");
        document.write("<br>");
    }
    else{
        document.write(num);
        document.write("<br>");
    }
}
