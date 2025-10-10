function fn() {
  const obj1 = {name: 'Jo' };
  let obj2 = {name: 'Josephine'};
 obj1.name = 'Ada';
 obj2.name = 'Ada';

 obj2 = {name: 'Jo Ada'};
   return { obj1, obj2 };
}
const result = fn();
console.log(result.obj1);
console.log(result.obj2);
fn()


