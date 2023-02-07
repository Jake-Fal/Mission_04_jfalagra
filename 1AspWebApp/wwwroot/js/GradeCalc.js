//Call the input grades to perform a function
$('#sendGrade').click(function () {
    assignments = parseInt($("#Assignments").val()) * .5;
    project = parseInt($("#Project").val()) * .1;
    quizzes = parseInt($("#Quizzes").val()) * .1;
    midterm = parseInt($("#Midterm").val()) * .1;
    final = parseInt($("#Final").val())* .1;
    intex = parseInt($("#INTEX").val()) * .1;

        //calculate the overall percentage
    total = (assignments + project + quizzes + midterm + final + intex).toFixed(2)
        //output the final grade
        if (total >= 93) {
            printStatement = 'You got ' + total + '%. That\'s an A!'
        }
        else if (total >= 90) {
            printStatement = 'You got ' + total + '%. That\'s an A-!'
        }
        else if (total >= 87) {
            printStatement = 'You got ' + total + '%. That\'s a B+!'
        }
        else if (total >= 84) {
            printStatement = 'You got ' + total + '%. That\'s a B.'
        }
        else if (total >= 80) {
            printStatement = 'You got ' + total + '%. That\'s a B-.'
        }
        else if (total >= 77) {
            printStatement = 'You got ' + total + '%. That\'s a C+.'
        }
        else if (total >= 74) {
            printStatement = 'You got ' + total + '%. That\'s a C.'
        }
        else if (total >= 70) {
            printStatement = 'You got ' + total + '%. That\'s a C-.'
        }
        else if (total >= 67) {
            printStatement = 'You got ' + total + '%. That\'s a D+ :('
        }
        else if (total >= 64) {
            printStatement = 'You got ' + total + '%. That\'s a D :('
        }
        else if (total >= 60) {
            printStatement = 'You got ' + total + '%. That\'s a D- :('
        }
        else {
            printStatement = 'You got ' + total + '%. That\'s an E :(('
        }
    alert(printStatement);
})
