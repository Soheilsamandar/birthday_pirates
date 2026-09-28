import qrcode
URL= "https://soheilsamandar.github.io/birthday_pirates/"
qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=15, border=5)
qr.add_data(URL)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save("birthday_qr.png")

