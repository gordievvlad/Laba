let table = document.getElementById('table')

let nameInput = document.querySelector('#name')
let count = 3;
let num = 1;
let salary = 750;

function onAddrow(e) {
    let name = nameInput.value;
    count += 1;
    num += 1;
    salary += 120;
    let id = count;
    let numm = num;
    let salaryy = salary;
    let template = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${numm}</td>
            <td>${salaryy}</td>
            <td><button class="editBtn" onclick="onEditRow()">&#9998;</button></td>
            <td><button class="deleteBtn">╳</button></td>
        </tr>`;
    table.innerHTML += template;
    clean();
    document.getElementById('button_cancel').style.display = 'none';
    document.getElementById('button_add').style.display = 'block';
    document.getElementById('table_department').style.display = 'block';
    document.getElementById('add_nav').style.display = 'none';
    document.getElementById('button_save').style.display = 'none';
    document.getElementById("name_list").innerHTML = "Department list";
}

function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    if (confirm("Please confirm delete department?")) {
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
// let tablee1 = document.getElementById('add_table1'), rrIndex;
// let tablee2 = document.getElementById('add_table2');

function add_btn() {
    document.getElementById("name_list").innerHTML = "Add department";
    document.getElementById('button_cancel').style.display='block';
    document.getElementById('button_add').style.display='none';
    document.getElementById('table_department').style.display='none';
    document.getElementById('add_nav').style.display='block';
    document.getElementById('button_save').style.display='block';
    // Переносит выбранную строку во 2 таблицу
    // for (var i = 1; i < tablee1.rows.length; i++) {
    //     tablee1.rows[i].onclick = function () {
    //         rrIndex = this.rowIndex;
    //         console.log(rrIndex);
    //         tablee2.rows[1].cells[0].innerHTML = this.cells[0].innerHTML;
    //         tablee2.rows[1].cells[1].innerHTML = this.cells[1].innerHTML;
    //         tablee2.rows[1].cells[2].innerHTML = this.cells[2].innerHTML;
    //         tablee2.rows[1].cells[3].innerHTML = this.cells[3].innerHTML;
    //     }
    // }
}

function cancel_btn() {
    document.getElementById("name_list").innerHTML = "Department list"
    document.getElementById('button_cancel').style.display='none',
    document.getElementById('button_add').style.display='block',
    document.getElementById('table_department').style.display='block',
    document.getElementById('add_nav').style.display='none',
    document.getElementById('button_save').style.display='none',
    document.getElementById('button_edit_save').style.display='none',
    clean();
}

let tablee = document.getElementById('table'), rIndex;

function onEditRow() {
    document.getElementById("name_list").innerHTML = "Edit department";
    document.getElementById('button_edit_save').style.display = 'block';
    document.getElementById('button_cancel').style.display = 'block';
    document.getElementById('button_add').style.display = 'none';
    document.getElementById('table_department').style.display = 'none';
    document.getElementById('add_nav').style.display = 'block';
    document.getElementById('button_save').style.display = 'none';

    for (var i = 1; i < tablee.rows.length; i++) {
        tablee.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);

            document.getElementById("name").value = this.cells[1].innerHTML;
        }
    }
}
function editRow() {
    tablee.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
    document.getElementById("name_list").innerHTML = "Department list"
    document.getElementById('button_edit_save').style.display = 'none';
    document.getElementById('button_cancel').style.display='none';
    document.getElementById('button_add').style.display='block';
    document.getElementById('table_department').style.display='block';
    document.getElementById('add_nav').style.display='none';
    document.getElementById('button_save').style.display='none';
    clean();
}


function proverka() {
    if (document.getElementById("name").value.length === 0 ) {
        alert("Please enter name")
    } else if (document.getElementById("name").value.length <= 1 || document.getElementById("name").value.length >= 31) {
        alert("Name field must be between 2 and 30 characters")
    } else {
        onAddrow();
    }
}

function proverka1() {
    if (document.getElementById("name").value.length === 0 ) {
        alert("Please enter name")
    } else if (document.getElementById("name").value.length <= 1 || document.getElementById("name").value.length >= 31) {
        alert("Name field must be between 2 and 30 characters")
    } else {
        editRow();
    }
}


function clean() {
    document.getElementById('name').value = "";
}

function tab1_To_tab2() {
    let table1 = document.getElementById("add_table1");
    let table2 = document.getElementById("add_table2");
    let checkboxes = document.getElementsByName("check_tabl1");


    for(let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {

            // create new row and cells
            let newRow = table2.insertRow(table2.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                cell5 = newRow.insertCell(4);

            // add value to the cells
            cell1.innerHTML = "<input type='checkbox' name='check_tabl2'>"
            cell2.innerHTML = table1.rows[i+1].cells[1].innerHTML;
            cell3.innerHTML = table1.rows[i+1].cells[2].innerHTML;
            cell4.innerHTML = table1.rows[i+1].cells[3].innerHTML;
            cell5.innerHTML = table1.rows[i+1].cells[4].innerHTML;


            // remove the transfered rows from the first table [table1]

            let index = table1.rows[i+1].rowIndex;
            table1.deleteRow(index);
            i--;

            console.log("yes")
        }
    }

}

function tab2_To_tab1() {
    let table1 = document.getElementById("add_table1");
    let table2 = document.getElementById("add_table2");
    let checkboxes = document.getElementsByName("check_tabl2");


    for(let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {

            // create new row and cells
            let newRow = table1.insertRow(table1.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                cell5 = newRow.insertCell(4);

            // add value to the cells
            cell1.innerHTML = "<input type='checkbox' name='check_tabl1'>"
            cell2.innerHTML = table2.rows[i+1].cells[1].innerHTML;
            cell3.innerHTML = table2.rows[i+1].cells[2].innerHTML;
            cell4.innerHTML = table2.rows[i+1].cells[3].innerHTML;
            cell5.innerHTML = table2.rows[i+1].cells[4].innerHTML;


            // remove the transfered rows from the first table [table1]

            let index = table2.rows[i+1].rowIndex;
            table2.deleteRow(index);
            i--;

            console.log("yes")
        }
    }

}