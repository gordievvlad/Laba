// let btnAdd = document.getElementById("button_save")
let table = document.querySelector('table')

let nameInput = document.querySelector('#name')
let dateInput = document.querySelector('#date')
let departmentInput = document.querySelector('#department')
let positionsInput = document.querySelector('#positions')
let specializationInput = document.querySelector('#specialization')
let experienceInput = document.querySelector('#experience')
let wagesInput = document.querySelector('#wages')
let count = 3;

function onAddrow(e) {
    let name = nameInput.value;
    let date = dateInput.value;
    let department = departmentInput.value;
    let positions = positionsInput.value;
    let specialization = specializationInput.value;
    let experience = experienceInput.value;
    let wages = wagesInput.value;

    count += 1;
    let id = count;
    let template = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${date}</td>
            <td>${department}</td>
            <td>${positions}</td>
            <td>${specialization}</td>
            <td>${experience}</td>
            <td>${wages}</td>
            <td><button class="editBtn" onclick="onEditRow()">&#9998;</button></td>
            <td><button class="deleteBtn">╳</button></td>
        </tr>`;
    table.innerHTML += template;
    clean();
    document.getElementById('button_cancel').style.display = 'none';
    document.getElementById('button_add').style.display = 'block';
    document.getElementById('head_date').style.display = 'block';
    document.getElementById('table_employee').style.display = 'block';
    document.getElementById('add_nav').style.display = 'none';
    document.getElementById('button_save').style.display = 'none';
    document.getElementById("name_list").innerHTML = "Employee list";
}

// btnAdd.addEventListener('click', onAddrow);

function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    if (confirm("Please confirm delete employee?")) {
        const btn = e.target;
        btn.closest("tr").remove();
        // Do whatever you want to do when OK clicked
    }
    // else{
    //     // Do whatever you want to do when Cancel clicked
    // }
    clean();
}

table.addEventListener('click', onDeleteRow);

function add_btn() {
    document.getElementById("name_list").innerHTML = "Add employee";
    document.getElementById('button_cancel').style.display='block';
    document.getElementById('button_add').style.display='none';
    document.getElementById('head_date').style.display='none';
    document.getElementById('table_employee').style.display='none';
    document.getElementById('add_nav').style.display='block';
    document.getElementById('button_save').style.display='block';
}

function cancel_btn() {
    document.getElementById("name_list").innerHTML = "Employee list"
    document.getElementById('button_cancel').style.display='none',
    document.getElementById('button_add').style.display='block',
    document.getElementById('head_date').style.display='block',
    document.getElementById('table_employee').style.display='block',
    document.getElementById('add_nav').style.display='none',
    document.getElementById('button_save').style.display='none',
    document.getElementById('button_edit_save').style.display='none',
    clean();
}

let tablee = document.getElementById('table'), rIndex;

function onEditRow() {
    document.getElementById("name_list").innerHTML = "Edit employee";
    document.getElementById('button_edit_save').style.display = 'block';
    document.getElementById('button_cancel').style.display = 'block';
    document.getElementById('button_add').style.display = 'none';
    document.getElementById('head_date').style.display = 'none';
    document.getElementById('table_employee').style.display = 'none';
    document.getElementById('add_nav').style.display = 'block';
    document.getElementById('button_save').style.display = 'none';

    for (var i = 1; i < tablee.rows.length; i++) {
        tablee.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);

            document.getElementById("name").value = this.cells[1].innerHTML;
            document.getElementById("date").value = this.cells[2].innerHTML;
            document.getElementById("department").value = this.cells[3].innerHTML;
            document.getElementById("positions").value = this.cells[4].innerHTML;
            document.getElementById("specialization").value = this.cells[5].innerHTML;
            document.getElementById("experience").value = this.cells[6].innerHTML;
            document.getElementById("wages").value = this.cells[7].innerHTML;
        }
    }
}

function editRow() {
    tablee.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
    tablee.rows[rIndex].cells[2].innerHTML = document.getElementById("date").value;
    tablee.rows[rIndex].cells[3].innerHTML = document.getElementById("department").value;
    tablee.rows[rIndex].cells[4].innerHTML = document.getElementById("positions").value;
    tablee.rows[rIndex].cells[5].innerHTML = document.getElementById("specialization").value;
    tablee.rows[rIndex].cells[6].innerHTML = document.getElementById("experience").value;
    tablee.rows[rIndex].cells[7].innerHTML = document.getElementById("wages").value;
    document.getElementById("name_list").innerHTML = "Employee list"
    document.getElementById('button_edit_save').style.display = 'none';
    document.getElementById('button_cancel').style.display='none';
    document.getElementById('button_add').style.display='block';
    document.getElementById('head_date').style.display='block';
    document.getElementById('table_employee').style.display='block';
    document.getElementById('add_nav').style.display='none';
    document.getElementById('button_save').style.display='none';
    clean();
}

function proverka() {
    if (document.getElementById("name").value.length === 0 ) {
        alert("Please enter name")
    } else if (document.getElementById("name").value.length <= 1 || document.getElementById("name").value.length >= 31) {
        alert("Name field must be between 2 and 30 characters")
    } else if (document.getElementById("date").value.length === 0 ) {
        alert("Please enter date of birth")
    } else if (document.getElementById("experience").value.length === 0 ) {
        alert("Please enter experience")
    } else if (document.getElementById("wages").value.length === 0 ) {
        alert("Please enter wages")
    } else {
        onAddrow();
    }
}

function proverka1() {
    if (document.getElementById("name").value.length === 0 ) {
        alert("Please enter name")
    } else if (document.getElementById("name").value.length <= 1 || document.getElementById("name").value.length >= 31) {
        alert("Name field must be between 2 and 30 characters")
    } else if (document.getElementById("date").value.length === 0 ) {
        alert("Please enter date of birth")
    } else if (document.getElementById("experience").value.length === 0 ) {
        alert("Please enter experience")
    } else if (document.getElementById("wages").value.length === 0 ) {
        alert("Please enter wages")
    } else {
        editRow();
    }
}


function clean() {
    document.getElementById('name').value = "";
    document.getElementById('date').value = "";
    document.getElementById('department').value = "";
    document.getElementById('specialization').value = "";
    document.getElementById('positions').value = "";
    document.getElementById('experience').value = "";
    document.getElementById('wages').value = "";
}

function searchDate() {
    var date_1 = document.getElementById('date1').value;
    var date_2 = document.getElementById('date2').value;
    var table = document.getElementById('table');
    // console.log(date_1)
    // var parts = date_1.split('-')
    // var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    // console.log(mydate.toDateString());
    // var parts1 = date_2.split('-')
    // var mydate1 = new Date(parts1[0], parts1[1] - 1, parts1[2]);
    // console.log(mydate1.toDateString());
    // aa = mydate.toDateString();
    // bb = mydate1.toDateString();
    // console.log(bb>aa);
    a = date_1;
    var regPhrase = new RegExp(a, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[2].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
    // console.log(date_1);
    // console.log(date_2);
    // x=Date.parse(date_1);
    // y=Date.parse(date_2);
    // console.log();
    // z = 1627603300000;
    // if (x<=z && z<=y){
    //     console.log(z);
    // }

}

function cleanDate() {
    document.getElementById('date1').value = "";
    document.getElementById('date2').value = "";
}