function check(){
        let name = document.getElementById('name');
        let email = document.getElementById('mail');
        let surname = document.getElementById('surname');
        let password = document.getElementById('password');
        let checkbox = document.getElementById('checkbox');
        let country = document.getElementById('country');
        let male = document.getElementById('male');
        let female = document.getElementById('female');
        let gender = document.querySelector('input[name = "gender"]:checked');

        document.getElementById('error').innerHTML = "";
        document.getElementById('rezult').innerHTML  = "";
        document.getElementById('errname').innerHTML  = "";
        document.getElementById('errsurname').innerHTML  = "";
        document.getElementById('errgender').innerHTML  = "";
        document.getElementById('errcountry').innerHTML  = "";
        document.getElementById('errpass').innerHTML  = "";
        document.getElementById('errmail').innerHTML  = "";
        document.getElementById('errcheckbox').innerHTML = "";

        if(name.value == ""){
            document.getElementById('errname').innerHTML += "Введите имя";
        }
        if(surname.value == ""){
            document.getElementById('errsurname').innerHTML += "Введите фамилию";
        }

        if (male.checked == false && female.checked == false ) {
            document.getElementById('errgender').innerHTML += "Выберете пол <br>";
        } 

        if(country.selectedIndex == 0){
            document.getElementById('errcountry').innerHTML += "Выберите страну <br>";
        }

        if (email.value == ""){
            document.getElementById('errmail').innerHTML += "Введите почту <br>";
        }
        if (password.value == ""){
            document.getElementById('errpass').innerHTML += "Введите почту <br>";
        }

        if (checkbox.checked == false){
            document.getElementById('errcheckbox').innerHTML += "Согласитесь с условиями пользования <br>";
        }
        

        if (name.value == "" || email.value == "" || surname.value == "" || password.value == "" || checkbox.checked == false || country.selectedIndex == 0 ||male.checked == false && female.checked == false  ) {
            document.getElementById('error').innerHTML += "Регистрация не завершена<br>";
         }  
         else{
             document.getElementById('rezult').innerHTML += `<br>${name.value} , добро пожаловать `
         }
        }
