console.clear();

import { Observable } from 'rxjs';

// สร้าง object observer ซึ่งถายใน object นี้จะประกอบไปด้วย callback ทั้งหมด 3 ตัว
// next จะส่งค่ากลับไปที่ observer ซึ่งจะส่งค่าไปเรื่อย ๆ จนกว่าจะครบจำนวน ที่จะแสดง
// error จะส่งค่ากลับไปที่ observer ซึ่งจะส่งเพียงครั้งเดียว เมื่อเกิด error
// complete จะส่งค่ากลับไปที่ observer ซึ่งจะส่งเพียงครั้งเดียว เมื่อค่าส่งครบแล้ว

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete!'),
};

const observable = new Observable((subscriber) => {
  subscriber.next('World');
  subscriber.next('World');

  // เมื่อ complete ถูกเรียกแล้ว จะไม่มีการส่งค่าใด ๆ กลับไป
  subscriber.complete();

  // ค่าพวกนี้ จะไม่ถูกส่งกลับไป เนื่องจาก complete ถูกเรียกใช้แล้ว
  subscriber.next('Hello');
  subscriber.next('World');
});

// observable เรียกใช้ subscribe
observable.subscribe(observer);
