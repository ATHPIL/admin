$(document).ready(function () {
    // Delete schedule when delete button is clicked
    $('.delete-schedule').click(function () {
        $(this).closest('li').remove();
    });

    // Toggle sidebar on button click
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Function to generate patient records table
    function generateRecordsTable() {
        var tableHTML = '<table class="table table-striped">' +
                            '<thead>' +
                                '<tr>' +
                                    '<th>Name</th>' +
                                    '<th>Age</th>' +
                                    '<th>Disease</th>' +
                                    '<th>Medicine</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody>';

        patientRecords.forEach(function(record) {
            tableHTML += '<tr>' +
                            '<td>' + record.name + '</td>' +
                            '<td>' + record.age + '</td>' +
                            '<td>' + record.disease + '</td>' +
                            '<td>' + record.medicine + '</td>' +
                        '</tr>';
        });

        tableHTML += '</tbody>' +
                    '</table>';

        document.getElementById('recordsTable').innerHTML = tableHTML;
    }

    // Array to store patient records
    var patientRecords = [
        { id: 1, name: "John Doe", age: 45, disease: "Flu", medicine: "Paracetamol" },
        { id: 2, name: "Jane Smith", age: 35, disease: "Cold", medicine: "Aspirin" },
    ];

    // Event listener for adding patient records
    document.getElementById('addRecordForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var disease = document.getElementById('disease').value;
        var medicine = document.getElementById('medicine').value;

        var id = patientRecords.length + 1;

        var newRecord = {
            id: id,
            name: name,
            age: age,
            disease: disease,
            medicine: medicine
        };

        patientRecords.push(newRecord);

        generateRecordsTable();

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('disease').value = '';
        document.getElementById('medicine').value = '';
    });

    // Generate patient records table
    generateRecordsTable();
});
