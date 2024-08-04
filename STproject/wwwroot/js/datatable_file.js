$(document).ready(function () {
    $("#dataTableData").DataTable({
        "paging": true,
        "lengthChange": true,
        "pageLength": 5,
        "lengthMenu": [5, 10, 25, 100],
        "searching": true,
        "ordering": true,
        "info": true,
        "language": {
            "paginate": {
                "previous": "Prev",
                "next": "Next"
            }
        }
    });


    $("#Validation").validate({
        rules: {
            LoginUserId: "required",
        },
        messages: {
            LoginUserId: "Please enter login user id",
        },
        submitHandler: function (form) {
            
        }
    });

    function sendData() {
        var obj = {
            LoginUserId: $("#LoginUserId").val(),
            UserName: $("#UserName").val(),
            Address: $("#Address").val(),
            ContactNumber: $("#ContactNumber").val(),
            MobileNumber: $("#MobileNumber").val(),
            EmailId: $("#EmailId").val(),
            OTPVerify: $("#OTPVerify").is(':checked'),
            Tab: $("#Tab").is(':checked'),
            UserLayer: $("#UserLayer").val(),
            Remark: $("#Remark").val(),
            IsActive: $("#IsActive").is(':checked')
        };
        $.ajax({
            url: 'Home/addUser',
            type: 'POST',
            contentType: 'application/json',
            data: obj,
            success: function (response) {
                if (response == "success") {
                    $(form)[0].reset();
                    alert('Data added successfully!');
                    window.location.href = '/Home/displayAll';
                }
            },
            error: function (xhr, status, error) {
                alert('An error occurred: ' + error);
            }
        });
    }

});

