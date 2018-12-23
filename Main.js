// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint

fetch('http://localhost:45755/TheThirdJavaProject/ress/users') // URL ADRESAS
    .then((resp) => resp.json()) 
    .then(function(data) {

        table = CreateTitles();
        var i = 1;
            data.users.forEach(element => {

            var tr = document.createElement("tr");

            var thid = document.createElement("th");
            var th = document.createElement("th");
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");
            var th3 = document.createElement("th");
            var th4 = document.createElement("th");
            var th5 = document.createElement("th");
            var btn = document.createElement("button");
            btn.onclick = function Delete()
            {
                btn.style.color = "red";
                var url = 'http://localhost:45755/TheThirdJavaProject/ress/users/delete/';
                
            
                nameToBeDeleted = btn.parentElement.children[1].textContent;
                //localhost:45755/TheThirdJavaProject/ress/users/insert/Dangis/Bakutis/150/3/15/12345678910
                
                fetch(url + nameToBeDeleted, {
                  method: 'GET'
                }).then(resp)
                {
                    window.alert(nameToBeDeleted);
                    btn.style.color = "blue";
                };
               
            }
            
            var tid = document.createTextNode(i);
            var t = document.createTextNode(element.name);
            var t1 = document.createTextNode(element.surname);
            var t2 = document.createTextNode(element.personal_code);
            var t3 = document.createTextNode(element.age);
            var t4 = document.createTextNode(element.points);
            var t5 = document.createTextNode(element.place);
            
            var btnt = document.createTextNode("DELETE");

        
            thid.appendChild(tid);
            th.appendChild(t);
            th1.appendChild(t1);
            th2.appendChild(t2);
            th3.appendChild(t3);
            th4.appendChild(t4);
            th4.appendChild(t5);
            btn.appendChild(btnt);
        
            tr.appendChild(thid);
            tr.appendChild(th);
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            tr.appendChild(th5);
            tr.appendChild(btn);
            table.appendChild(tr);
            
            i++;
            
        });
        
        document.body.appendChild(table);
        
        // sukurti input insert
        var nameInput = document.createElement("input");
        nameInput.placeholder = "Name";
        nameInput.id = "nameInput";
        var surnameInput = document.createElement("input");
        surnameInput.placeholder = "Surname";
        surnameInput.id = "surnameInput";
        var pointsInput = document.createElement("input");
        pointsInput.placeholder = "Points";
        pointsInput.id = "pointsInput";
        var placeInput = document.createElement("input");
        placeInput.placeholder = "Place";
        placeInput.id = "placeInput";
        var ageInput = document.createElement("input");
        ageInput.placeholder = "Age";
        ageInput.id = "ageInput";
        var personal_codeInput = document.createElement("input");
        personal_codeInput.placeholder = "Personal code";
        personal_codeInput.id = "personalCodeInput";


        var insertBtn = document.createElement("button");
        insertBtn.textContent = "Insert";
        insertBtn.style.background = "green";
        insertBtn.onclick = function Insert()
        {
            var name = document.getElementById("nameInput").value;
            surname = document.getElementById("surnameInput").value;
            points = document.getElementById("pointsInput").value;
            place = document.getElementById("placeInput").value;
            age = document.getElementById("ageInput").value;
            personal_code = document.getElementById("personalCodeInput").value;
            window.alert("do you want insert this user :" + name + surname + points + place + age + personal_code);
            
            var url = 'http://localhost:45755/TheThirdJavaProject/ress/users/insert/';
            //localhost:45755/TheThirdJavaProject/ress/users/insert/Dangis/Bakutis/150/3/15/12345678910
            fetch(url + name + "/" + surname + "/" + points + "/" + place + "/" + age + "/" + personal_code, 
            {
              method: 'GET'
            }).then(response)
            {
                window.alert(name);
            };
        }
        document.body.appendChild(nameInput);

        document.body.appendChild(surnameInput);

        document.body.appendChild(pointsInput);

        document.body.appendChild(placeInput);

        document.body.appendChild(ageInput);

        document.body.appendChild(personal_codeInput);
        document.body.appendChild(insertBtn);
});

function CreateTitles()
{
    var table = document.createElement("table");
    var tr = document.createElement("tr");
        
    var thid = document.createElement("th");
    var th = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");


    var tid = document.createTextNode("ID");
    var t = document.createTextNode("NAME");
    var t1 = document.createTextNode("SURNAME");
    var t2 = document.createTextNode("PERSONAL_CODE");
    var t3 = document.createTextNode("AGE");
    var t4 = document.createTextNode("POINTS");
    var t5 = document.createTextNode("PLACE");

    thid.appendChild(tid);
    th.appendChild(t);
    th1.appendChild(t1);
    th2.appendChild(t2);
    th3.appendChild(t3);
    th4.appendChild(t4);
    th5.appendChild(t5);


    tr.appendChild(thid);
    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    table.appendChild(tr);
    return table;
}

