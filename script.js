var container = document.createElement("div");
container.setAttribute("class", "container");

var calculator = document.createElement("div");
calculator.setAttribute("class", "calculator");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "0");
input.setAttribute("id", "screen-display");

function btn(tagname, attriname, attrivalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attriname, attrivalue);
    ele.innerHTML = content;
    return ele;
}

var one = btn("button", "onclick", "display('1')", "1");
var two = btn("button", "onclick", "display('2')", "2");
var three = btn("button", "onclick", "display('3')", "3");
var plus = btn("button", "onclick", "display('+')", "+");
var four = btn("button", "onclick", "display('4')", "4");
var five = btn("button", "onclick", "display('5')", "5");
var six = btn("button", "onclick", "display('6')", "6");
var minus = btn("button", "onclick", "display('-')", "-");
var seven = btn("button", "onclick", "display('7')", "7");
var eight = btn("button", "onclick", "display('8')", "8");
var nine = btn("button", "onclick", "display('9')", "9");
var multi = btn("button", "onclick", "display('*')", "*");
var C = btn("button", "onclick", "cancle('C')", "C");
var Del = btn("button", "onclick", "del('D')", "D");
var modulus = btn("button", "onclick", "display('%')", "%");
var division = btn("button", "onclick", "display('/')", "/");
var dot = btn("button", "onclick", "display('.')", ".");
var zero = btn("button", "onclick", "display('0')", "0");

var equalto = document.createElement("button");
equalto.setAttribute("onclick", "calculate()");
equalto.setAttribute("class", "equal");
equalto.innerHTML = "=";


calculator.append(input, one, two, three, plus, four, five, six, minus, seven, eight, nine, multi, C, Del, modulus, division, dot, zero, equalto);
container.append(calculator);
document.body.append(container);

var display_output = document.getElementById("screen-display");

function display(num) {
    display_output.value = display_output.value + num;
}

function cancle() {
    display_output.value = "";
}
function del() {
    display_output.value = display_output.value.slice(0, -1);
}

function calculate() {

    var result = eval(display_output.value)
    display_output.value = result;

}


