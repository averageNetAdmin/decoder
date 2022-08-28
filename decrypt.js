let button = document.querySelector(".button");
let input_data = document.querySelector(".data");
let input_password = document.querySelector(".password");
let div_result = document.querySelector(".result");

button.addEventListener("click", decrypt);

function decrypt() {
    let data = input_data.value;
    let passwordd = input_password.value;
    d = hexToBytes(data);
    let password = strToBytes(passwordd);
    let res = new Uint8Array(d.length/2);
    console.log(d)
    console.log(password)
    for (let i = 0; i < d.length/2; i++) {
        console.log(d[i]);
       console.log(password[i%(password.length)]);
        res[i] = d[i] ^ password[i%(password.length)];
    }
    div_result.textContent = bytesToStr(res);
    console.log(bytesToStr(res));
}

function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
} 

function strToBytes(str) {
    let utf8Encode = new TextEncoder();
    return utf8Encode.encode(str);
}

function bytesToStr(bytes) {
    let utf8Encode = new TextDecoder();
    return utf8Encode.decode(bytes);
}

function hexToBytes(hex) {
    let bytes = new Uint8Array(hex.length);
    for (var c = 0; c < hex.length; c += 2)
        bytes[c/2] = parseInt(hex.substr(c, 2), 16);
    return bytes;
}

function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
}
