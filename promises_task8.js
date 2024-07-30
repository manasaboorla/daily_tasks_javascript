function asyncTask(name, delay, shouldreject) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      if (shouldreject) {
        reject(`${name} is failed`);
      } else {
        resolved(`${name} completed`);
      }
    }, delay);
  });
}
asyncTask("manasa", 500, false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error", err);
  });

const task1 = asyncTask("Task1", 1000, false);
const task2 = asyncTask("Task2", 2000, false);
const task3 = asyncTask("Task3", 3000, true);

Promise.all([task1, task2, task3])
  .then((result) => {
    console.log(`All tasks completed`, result);
  })
  .catch((error) => {
    console.log(`one of the tasks failed`, error);
  });
Promise.allSettled([task1, task2, task3]).then((result) => {
  console.log("successs", result);
});
Promise.race([task1, task2, task3])
  .then((result) => {
    console.log("success=>", result);
  })
  .catch((err) => {
    console.log("err=>", err);
  });
//output
// manasa completed
// success=> Task1 completed
// successs [
//   { status: 'fulfilled', value: 'Task1 completed' },
//   { status: 'fulfilled', value: 'Task2 completed' },
//   { status: 'rejected', reason: 'Task3 is failed' }
// ]
// one of the tasks failed Task3 is failed
