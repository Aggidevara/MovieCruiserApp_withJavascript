        a=10 :is global in javascript;

        hoisting:
        for(var i=0;i<2;i++){
            console.log(i);
        }
        console.log('line',i);
        o/p:0
            1
            line 2

        console.log(i);
        function f(){
            var i;
        }
        f();
        o/p: error

        Es-2015 standard needs to be used 
        don't use var  use let and const for variable declaration;

        final in java is equal to const in javascript

        a=5;
        a-variable;
        5-literal;

        Numbers
        ===
        byte
        short 
        int
        long
        float
        double

        String
        ===
        char

        boolean



        MDN is website for javascript

        we can declare numbers in other way like;
        const a=new Number(20);//we can declare without new and even we can declare for Boolean String too
        console.log(a);
        o/p:20

        to create regex
        const a=/a.*/

        in equality operator there are 2 operators
        1)== to check both are equal are not it won't check the datatype
        2)=== to check both the value and datatype are equal are not

        undefined in javascript is false\undefined ,null and 0 are false values;
            const a=undefined;
            console.log(!a)
            o/p:false;

        strings supports multiple line of data 

        const a=`
           Hello,
           world
           `;

           console.log(a);
           
           o/p: Hello,
                world

        Expressions:const a =2+3;
            console.log(a);
            o/p:5
            2+3 is a expression;

        Expressions can have operands, variables

        const a=b=20;
        console.log(a);
        o/p: 20;
        assignment is an expression;

        Expressions include
            variables;
            literals
            operators
            assignment
            shorthand
            
            not include
                loops

        Arrays
        we can assign anything to anything in javascript
       1) const a=['a','b',2]
        console.log(a);
        o/p:a,b,2
        

       2) function sum(a,b){
            return a+b
        }
        const a=sum;
        console.log(a(2,5));
        o/p:7

        //higher order functions are same as lambda expression in java
        1)passing function as an argument
        2)functions can be inside array
    
        const sum=(a,b) =>a+b
        const prod=(a,b) =>a*b  or 
        const prod=function(a,b){
            return a+b;
        }
        const array=[sum,prod]
        console.log(array[1](2,8));
        o/p:16

        const a=[1,2,'3'];
        a.push(5);
        console.log(a.length);
        o/p:4

        const a=[1,2,'3'];
        console.log(a.map(i=>i+3));
        o/p:4 5 33

        const a=[1,2,'3'];
        console.log(a.filter(i=>i%2!==0);
        o/p:1 "3"
        bcoz in javascript it automatically converts the string number into integer

        const a=[1,2,'4'];
        const f=a.filter;
        console.log(f.call(a,i=>i%2 ===0));// it is possible in some scenarios not in all (if f.call(a,i=>i%2 ===0)) if we put this then it works
        o/p:2,4

        Important array prototypes:
        ====
        every
        filter
        find
        forEach
        keys
        map
        reduce

        instead of forEach we have (for in) and (for of) loops

        class Greeting{
            constructor(name){
                this name=name;
            }
            greet(){
                return `Hello,${this.name}!`;
            }
        }
        const greeting=new Greeting('javascript');
        console.log(greeting.greet());
        o/p:Hello javascript!;

        const greeting={
            greet(name){
                return `Hello,${name}!`;
            }
        }
        console.log(greeting.greet('javascript'));
        o/p:Hello javascript!

        const person={
            "firstName":"swetha",
            "lastname":"Aggi"
        };
        console.log(person.firstName);
        or of we dont know what is the property then we can do like this
        const a='firstName'
        console.log(person[a]);

        improper json 

        without double quotes and with single quotes
        it will run but in server it will throw error json is not in format
        const person={
            "firstName":"swetha",
            "lastname":"Aggi",
            greet:function(){
                return `Hello,${this.fisrtName} ${this.lastname}`
            }
        };

            console.log(person.greet());
            o/p:Hello swetha Aggi

         function Greeter(firstName,lastname){
            return{"firstName":"swetha",
            "lastname":"Aggi",
            greet:function(){
                return `Hello,${this.fisrtName} ${this.lastname}`
            }
        };
        }
             const person=new Greeter();
            console.log(person.greet());


            functions are variables
            functions cannot have two common names
           
            function sum(a,b){
                return a+b;
            }
            console.log(sum(1,2,3));
            o/p:3

            function sum(){
                let sum=0;
                for(let i=0;i<arguments.length;i++){
                    sum=sum+arguments[i];
                }
                return sum;
            }
            console.log(sum(1,2,3,4));
            o/p:10

            