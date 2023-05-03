// 结构函数
function compose(funcs) {
  return funcs.reduce((a, b) => {
    // console.log("%c a ⧭", "color: #99614d", a);
    // console.log("%c b ⧭", "color: #00736b", b);

    return function (...args) {
      // 每次累加 都把b函数 放到内部
      // 一旦执行 是从里到外 依次返回计算结果
      return a(b(...args));
    };
  });
}

const a = (num) => {
  console.log("a => num: ", num);
  return num;
};

const b = (num) => {
  console.log("b => num: ", num);
  return num;
};

const c = (num) => {
  console.log("c => num: ", num);
  return num;
};

const d = (num) => {
  console.log("d => num: ", num);
  return num;
};

const composeFun = compose([a, b, c, d]);

composeFun(1);
