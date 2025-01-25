const randomNumber = parseInt(Math.random()*100+1)
        const userinput = document.querySelector('#guessfield');
        const submit = document.querySelector('#subt');
        const guesses  =document.querySelector('#guesses');
        const reamin = document.querySelector('#remain');
        const hint = document.querySelector('#hint')
        const btn = document.querySelector('#btn')

        let guessnum = 0;
        let prevguess= []
        const warning = "please put valid number"
        isPlaygame = true;
        let guess

        reamin.innerHTML = '10'
        if(isPlaygame){
            submit.addEventListener('click',(e)=>{
                e.preventDefault();
                guess = (userinput.value);
                validateGame(guess)
            })
        }
        function validateGame(guess){
            if(isNaN(guess)){
                alert(`${warning}`);
            }
            else if(guess<1) alert(`${warning}`);
            else if(guess >100) alert(`${warning}`);
            else{
                checknumber(guess);
            }
        }
        function checknumber(guess){
                
            guessnum++;
            reamin.innerHTML = `${10-guessnum}`
            prevguess.push(guess)
            guesses.innerHTML = `${prevguess.join(', ')}`
            if(guess < randomNumber && guessnum <=10) {
                hint.innerHTML= ('Number is TOOO low')
                userinput.value =''
            }
            else if(guess > randomNumber && guessnum <=10){
                hint.innerHTML= ('Number is TOOO high')
                userinput.value =''

            }
            else{
                hint.innerHTML= ('you guess the correct number')
                newgame();
            }

            if(guessnum == 10){
                endgame();
            }
        }

        function endgame(){
            hint.innerHTML= (`you loose the random number was ${randomNumber}`)
            isPlaygame = false
            subt.disabled = true
            newgame()
        }

        function newgame(){
            
            btn.innerHTML= 'are you want to play again ? click here'
            document.querySelector('#btn').addEventListener('click',(e)=>{     
                btn.innerHTML = ''
                hint.innerHTML = ''
                userinput.value = ''
                reamin.innerHTML = '10'
                guesses.innerHTML = '';
                subt.disabled = false
                isPlaygame = true;
                guessnum = 0
                prevguess =[];
            })
        }
