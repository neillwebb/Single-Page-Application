(function () {
    $('section').hide();
})();

const renderEmployees = function(employeeList, element) {
    for (var i in employeeList) {
        const employeeName = employeeList[i].name;
        const employeeOfficeNum = employeeList[i].officeNum;
        const employeePhoneNum = employeeList[i].phoneNum;

        $(element).append(`<div id="list"><br>${employeeName}<br>${employeeOfficeNum}<br>${employeePhoneNum}</div>`)
    }
}

const showView = function() {
    $('section').hide();
    $('#employeeDisplay').empty();
    $('#view').show();
    renderEmployees(employeeList, '#employeeDisplay');
};

const showAdd = function() {
    $('section').hide();
    $('#employeeAddDisplay').empty();
    $('#add').show();
    renderEmployees(employeeList, '#employeeAddDisplay');
};

const showVerify = function() {
    $('section').hide();
    $('#employeeVerifyDisplay').empty();
    $('#verify').show();
};

const addEmployee = function() {
    var newEmployee = {};
    newEmployee.name = $('#employeeName').val()
    newEmployee.officeNum = $('#officeNumber').val()
    newEmployee.phoneNum = $('#phoneNumber').val()
    employeeList.push(newEmployee);
    $('#employeeAddDisplay').empty();
    renderEmployees(employeeList, '#employeeAddDisplay');
};

const verifyEmployee = function() {
    var em = $('#employeeNameToVerify').val();
    $("#employeeVerifyDisplay").empty();

    var found = false;
    for (var i in employeeList) {
        if(employeeList[i].name.toLowerCase() == em.toLowerCase()) {
            $('#employeeVerifyDisplay').append("<div>Found: " + employeeList[i].name + "</div>");
            found = true;
        }
    }
    if (!found) {
        $("#employeeVerifyDisplay").append("<div>No employee with name: " + em + " exists</div>");
    }
};

$('#viewBtn').on('click', showView);
$('#addBtn').on('click', showAdd);
$('#verifyBtn').on('click', showVerify);

$('#addEmployeeBtn').on('click', addEmployee);
$('#verifyEmployeeBtn').on('click', verifyEmployee);