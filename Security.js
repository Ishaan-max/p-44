class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1=createInput("code1");
        this.access1.position(100,90);
        this.access1.style('background','white');

        this.access2=createInput("code2");
        this.access2.position(100,300);
        this.access2.style('background','white');

        this.access3=createInput("code3");
        this.access3.position(700,200);
        this.access3.style('background','white');


        this.button1=createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background','white');

        this.button2=createButton('Check');
        this.button2.position(100,350);
        this.button2.style('background','white');

        this.button3=createButton('Check');
        this.button3.position(700,250);
        this.button2.style('background','white')
    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.accessCode1.value())){
            this.button1.hide();
            this.access1.hide();
            score++
            }
        })

    }
}