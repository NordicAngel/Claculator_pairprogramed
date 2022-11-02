const app = Vue.createApp({
    data() {
        return {
            number1:"",
            number2:"",
            result:0, 
            operation: "+" 
            }
        },
        methods: {
            calculate(){
                switch(this.operation){
                    case "+":
                        this.result = this.number1 + this.number2
                        break;
                    case "-":
                        this.result = this.number1 - this.number2
                        break;
                    case "*":
                        this.result = this.number1 * this.number2
                        break;
                    case "/":
                        this.result = this.number1 / this.number2
                        break;
                    default:
                        alert("You fucked up!")

                    
                }

            }
        }
    },
);