console.clear();

import { Observable } from 'rxjs';

// สร้าง object observer ซึ่งถายใน object นี้จะประกอบไปด้วย callback ทั้งหมด 3 ตัว
// complete จะส่งค่ากลับไปที่ observer ซึ่งจะส่งเพียงครั้งเดียว เมื่อค่าส่งครบแล้ว

const observer = {
  // next เมื่อมีข้อมูลใหม่เข้ามาใน observable จะเรียกฟังก์ชั่นนี้ใน observer ที่ subscribe กับ observable นั้น ๆ โดยจะส่งค่า value เข้าไปในฟังก์ชั่น
  next: (value: any) => console.log('next', value),

  // error เมื่อเกิดข้อผิดพลาดใน observable เรียกฟังก์ชั่นนี้ใน observer ที่ subscribe กับ observable นั้น ๆ โดยจะส่งค่า error เข้าไปในฟังก์ชั่น
  error: (error: any) => console.log('error', error),

  //
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

export class ObservableFile {}
