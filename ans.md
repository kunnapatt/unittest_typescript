คือเราดักข้อมูลรูปแบบหนึ่งในระหว่างที่เราอยากจะ Request data บางอย่างไปที่ Server แต่ Man in the middle นั้นจะมาดัก data ระหว่างที่เรากำลังส่งไป ซึ่งอาจจะเป็นได้ทั้ง 1 เก็บ data ที่เราส่งไปเช่นข้อมูลการชำระเงิน credit card หรืออาจจะแก้ไข data ที่เราส่งไปก็ได้เหมือนกัน

การป้องกันอาจทำได้โดยทำ Encrypt data ที่ส่งไป หรืออาจจะ communicate โดยที่มี HTTPS (SSL/TLS)


1). data -> encrypt public key with ssl server key -> post to server
2). crypto
3). เนื่องจากว่าเป็น library ที่ทำออกมาเพื่อ encrypt ข้อมูลโดยซึ่ง เหตุผลที่ใช้ library ตัวนี้เพราะว่า 1). เรื่องความปลอดภัย 2). ความถูกต้องของ algorithm 3). ความเร็วและง่ายในการใช้งาน ถ้าเรา implement algorithm เองจะต้องใช้เวลาในการ implement และต้องมาคอย maintain