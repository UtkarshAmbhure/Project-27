class roof{


    



    display(){
        var groundPos=this.body .position;

        push()
            translate(groundPos.x,groundPos.y);
            rectMode(CENTER)
            fill(150,0,250);
            rect(0,0,this.w,this.h)
            pop()



    }

}