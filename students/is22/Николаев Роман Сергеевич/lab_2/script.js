window.onload = function () {
    let example = '';
    
    outputElement = document.getElementById("result_field");


}

window.onload = function () {

    let a = '';
    let expressionResult = '';
    
    

    let example = '';

    outputElement = document.getElementById("result_field");
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');

    outputResult = document.getElementById("result_field_full");

    function onDigitButtonClicked(digit) {
        a = ''
        if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
            a += digit
            example += a
        }
        outputElement.innerHTML = example;

    }

    digitButtons.forEach(button => {
        button.onclick = function () {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });


    document.getElementById("btn_op_mult").onclick = function () {
        const text = outputElement.textContent;
        if ("+-*/".includes(text[text.length - 1])) {

        }
        else {
            a = '*'
            example += a
            outputElement.innerHTML = example
        }
    }
    document.getElementById("btn_op_plus").onclick = function () {
        const text = outputElement.textContent;
        if ("+-*/".includes(text[text.length - 1])) {
            
        }
        else {
            a = '+'
            example += a
            outputElement.innerHTML = example
        }
    }
    document.getElementById("btn_op_minus").onclick = function () {
        const text = outputElement.textContent;
        if ("+-*/".includes(text[text.length - 1])) {
            
        }
        else {
            a = '-'
            example += a
            outputElement.innerHTML = example
        }
    }
    document.getElementById("btn_op_div").onclick = function () {
        const text = outputElement.textContent;
        if ("+-*/".includes(text[text.length - 1])) {
            
        }
        else {
            a = '/'
            example += a
            outputElement.innerHTML = example
        }
    }

    document.getElementById("btn_op_clear").onclick = function () {
        a = ''
        example = ''
        // selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
        outputResult.innerHTML = ''
    }

    document.getElementById("btn_op_equal").onclick = function () {
        // if ("+-*/".includes(text[text.length - 1]))
        //     return;
        // else {
        result = eval(example);
        // answer = result;
        // outputResult.textContent = result;
        outputResult.innerHTML = result;
        // }
    }



    outputResult.innerHTML = a + selectedOperation + b

    a = expressionResult.toString()
    b = ''
    selectedOperation = null

    outputElement.innerHTML = a


    // -------------------------------------------------------------------------
    document.getElementById("btn_op_sign").onclick = function () {
        if (!selectedOperation) {
            if (a === '') {
                return
            }
            a = -a
            outputElement.innerHTML = a
        } else {
            if (b === '') {
                return
            }
            b = -b
            outputElement.innerHTML = b
        }
    }

    document.getElementById("btn_op_percent").onclick = function () {
        if (a !== '' && b !== '') {
            b = a * (b / 100)
            outputElement.innerHTML = b
        }
        else return
    }

    document.getElementById("btn_op_del").onclick = function () {
        if (expressionResult === '') {
            return
        }
        if (!selectedOperation) {
            if (a === '') {
                return
            }
            a = a.slice(0, -1);
            outputElement.innerHTML = a || '0';
        } else {
            if (b === '') {
                return
            }
            b = b.slice(0, -1);
            outputElement.innerHTML = b || '0';
        }
    }

    document.getElementById("btn_op_sqrt").onclick = function () {
        if (!selectedOperation) {
            if (a === '') {
                return
            }
            a = Math.sqrt(a)
            outputElement.innerHTML = a.toFixed(2)
        } else {
            return
        }
    }

    document.getElementById("btn_op_sqr").onclick = function () {
        if (!selectedOperation) {
            if (a === '') {
                return
            }
            a *= a
            outputElement.innerHTML = a
        } else {
            return
        }
    }

    document.getElementById("btn_op_fuc").onclick = function () {
        if (!selectedOperation) {
            if (a === '') {
                return
            }
            a = factorial(a)
            outputElement.innerHTML = a
        } else {
            return
        }
    }

    function factorial(n) {
        if (n < 0) {
            return "Error"
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1)
    }

    document.getElementById("btn_op_ooo").onclick = function () {
        if (!selectedOperation) {
            a += '000'
            outputElement.innerHTML = a

        } else {
            b += '000'
            outputElement.innerHTML = b
        }
    }

    const colors_1 = ["#000000", "#444444"];
    let currentColorIndex = 0;
    document.getElementById("btn_toggle_background").onclick = function () {
        document.querySelector("calculator").style.backgroundColor = colors_1[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors_1.length;
    };

    const colors_2 = ["#22ff00b4", "#ede2dcb4"];
    let currentColorIndex_1 = 0;
    document.getElementById("btn_result_background").onclick = function () {
        document.querySelector("result_field").style.backgroundColor = colors_2[currentColorIndex_1];
        currentColorIndex_1 = (currentColorIndex_1 + 1) % colors_2.length;
    };

};

//______________________________________________________________________________
//______________________________________________________________________________
// function onDigitButtonClicked(digit) {
//     if (!selectedOperation) {
//         if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
//             a += digit
//         }
//         outputElement.innerHTML = a
//     } else {
//         if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
//             b += digit
//             outputElement.innerHTML = b
//         }
//     }
// }
// document.getElementById("btn_op_mult").onclick = function () {
//     if (a === '') return
//     selectedOperation = 'x'
//     outputResult.innerHTML = a + selectedOperation
// }
// document.getElementById("btn_op_plus").onclick = function () {
//     if (a === '') return
//     selectedOperation = '+'

//     if (a !== '' && b !== '') {
//         expressionResult = (+a) + (+b)
//         a = expressionResult.toString()
//         b = ''
//         outputElement.innerHTML = a
//     }
//     outputResult.innerHTML = a + selectedOperation
// }
// document.getElementById("btn_op_minus").onclick = function () {
//     if (a === '') return
//     selectedOperation = '-'

//     if (a !== '' && b !== '') {
//         expressionResult = (+a) - (+b)
//         a = expressionResult.toString()
//         b = ''
//         outputElement.innerHTML = a
//     }
//     outputResult.innerHTML = a + selectedOperation
// }
// document.getElementById("btn_op_div").onclick = function () {
//     if (a === '') return
//     selectedOperation = '/'
//     outputResult.innerHTML = a + selectedOperation
// }

// document.getElementById("btn_op_equal").onclick = function () {
//     if (a === '' || b === '' || !selectedOperation)
//         return

//     switch (selectedOperation) {
//         case 'x'
//             expressionResult = (+a) * (+b)
//             break;
//         case '+':
//             expressionResult = (+a) + (+b)
//             break;
//         case '-':
//             expressionResult = (+a) - (+b)
//             break;
//         case '/':
//             expressionResult = (+a) / (+b)
//             break;
//     }