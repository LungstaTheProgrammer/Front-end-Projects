from PIL import Image
improt os
size = (450, 450)
infile_path = 'C:/Users/Lungile Madi/Documents/programming/work/jacairconditioningservice/img_desktop/'
infile_name = 'IMG-20190415-WA0026.jpg'
infile = infile_path + infile_name
outfile = infile_path + "img_mobile/" + infile_name[:-5]
if infile != outfile:
    try:
        outfile = os.path.splitext(infile)[0] + ".thumbnail"
        im = Image.open(infile)
        im.thumbnail(size)
        im.save(outfile, "JPEG")
    except IOError:
        print("cannot create thumbnail for", infile)


