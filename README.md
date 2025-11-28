Giải pháp kiến trúc (Architecture): Bạn cần xây dựng cơ chế Client-Side Encryption (Mã hóa phía người dùng) tương tự như Bitwarden hay LastPass.

Master Password: Mật khẩu chủ chỉ bạn biết.

Key Derivation (PBKDF2 / Argon2): Khi bạn nhập Master Password, chương trình sẽ biến nó thành một Encryption Key (Khóa mã hóa).

AES-GCM: Dùng Key đó để mã hóa dữ liệu password trước khi lưu vào chrome.storage.

Zero-Knowledge: Extension không bao giờ lưu Master Password vào ổ cứng. Chỉ giữ trong RAM khi bạn đang dùng, tắt trình duyệt là mất (bắt nhập lại).




https://www.flaticon.com/search?word=account


https://www.figma.com/design/9ID5XVsOlG71InncKjS9iR/Untitled?node-id=0-1&p=f&t=Laucg89tencZ5MG8-0
https://gemini.google.com/app/53a1e869c7974e5c