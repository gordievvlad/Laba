let table = document.querySelector('table')

let nameInput = document.querySelector('#name')
let count = 4;

function onAddrow(e) {
    let name = nameInput.value;
    count += 1;
    let id = count;
    let template = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td><button class="editBtn" onclick="onEditRow()">&#9998;</button></td>
            <td><button class="deleteBtn">╳</button></td>
        </tr>`;
    table.innerHTML += template;
    clean();
    document.getElementById('button_cancel').style.display = 'none';
    document.getElementById('button_add').style.display = 'block';
    document.getElementById('table_positions').style.display = 'block';
    document.getElementById('add_nav').style.display = 'none';
    document.getElementById('button_save').style.display = 'none';
    document.getElementById("name_list").innerHTML = "Positions list";
}

function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    if (confirm("Please confirm delete position?")) {
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
    document.getElementById("name_list").innerHTML = "Add position";
    document.getElementById('button_cancel').style.display='block';
    document.getElementById('button_add').style.display='none';
    document.getElementById('table_positions').style.display='none';
    document.getElementById('add_nav').style.display='block';
    document.getElementById('button_save').style.display='block';
}

function cancel_btn() {
    document.getElementById("name_list").innerHTML = "Positions list"
    document.getElementById('button_cancel').style.display='none',
    document.getElementById('button_add').style.display='block',
    document.getElementById('table_positions').style.display='block',
    document.getElementById('add_nav').style.display='none',
    document.getElementById('button_save').style.display='none',
    document.getElementById('button_edit_save').style.display='none',
    clean();
}

let tablee = document.getElementById('table'), rIndex;

function onEditRow() {
    document.getElementById("name_list").innerHTML = "Edit position"
    document.getElementById('button_edit_save').style.display = 'block'
    document.getElementById('button_cancel').style.display = 'block'
    document.getElementById('button_add').style.display = 'none'
    document.getElementById('table_positions').style.display = 'none'
    document.getElementById('add_nav').style.display = 'block'
    document.getElementById('button_save').style.display = 'none'

    for (var i = 1; i < tablee.rows.length; i++) {
        tablee.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);

            document.getElementById("name").value = this.cells[1].innerHTML;
        }
    }
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

function editRow() {
    tablee.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
    document.getElementById("name_list").innerHTML = "Positions list"
    document.getElementById('button_edit_save').style.display = 'none';
    document.getElementById('button_cancel').style.display='none';
    document.getElementById('button_add').style.display='block';
    document.getElementById('table_positions').style.display='block';
    document.getElementById('add_nav').style.display='none';
    document.getElementById('button_save').style.display='none';
    clean();
}

function clean() {
    document.getElementById('name').value = "";
}