/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name && name.length > 3) {
    for (const iterator of name) {
      if (iterator === " ") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

function sayHello() {
  const userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
