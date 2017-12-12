export class Hello {

  async say(message) {

    const numList = [1, 2, 3];
    const numList2 = await Promise.all(numList.map(id => id * 2));
    console.log(numList2); 

    const str = 'moja';
    console.log(str.padEnd(10, 'hoge'));
    console.log(str.padEnd(5, 'piyo')); 

    const arr = ['hoge', 'fuga', 'piyo'];
    console.log(arr.includes('hoge'));
    console.log(arr.includes('moja'));

    console.log(3 ** 2);
    console.log(2 ** 8);
    console.log(2 ** 10);

    document.body.innerHTML = (`${message}`);
    console.log(`${message}を出力しました`);
  }
}