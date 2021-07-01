// たまに実行される
async function randomRun() {
}

// 必ず実行される
async function finallyFunc() {
}

async function main(){
  if (Date.now() % 2 === 1) {
    await randomRun();
  }
  await finallyFunc();
}

main();
